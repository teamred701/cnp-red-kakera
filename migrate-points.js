/**
 * Discord BotのポイントデータをNotionへ移行するスクリプト
 *
 * 使い方:
 *   1. Google SheetsをCSV形式でダウンロード（ファイル→ダウンロード→CSVファイル）
 *   2. CSVファイルをこのスクリプトと同じフォルダか任意の場所に置く
 *   3. .envファイル（またはコマンド）で環境変数を設定:
 *        NOTION_TOKEN=secret_xxx
 *        NOTION_DATABASE_ID=xxx
 *   4. 実行:
 *        node scripts/migrate-points.js <CSVファイルのパス>
 *      例:
 *        node scripts/migrate-points.js scripts/points.csv
 */

const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

// 環境変数を.envから読む（dotenvがあれば）
try { require('dotenv').config(); } catch {}

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error('エラー: 環境変数 NOTION_TOKEN と NOTION_DATABASE_ID を設定してください。');
  process.exit(1);
}

const csvPath = process.argv[2];
if (!csvPath) {
  console.error('使い方: node scripts/migrate-points.js <CSVファイルのパス>');
  process.exit(1);
}

if (!fs.existsSync(csvPath)) {
  console.error(`エラー: ファイルが見つかりません: ${csvPath}`);
  process.exit(1);
}

function parseCSV(content) {
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
    if (cols.length < 3) continue;
    rows.push({
      discordId: cols[0],
      username: cols[1],
      points: parseInt(cols[2], 10) || 0,
      alCount: parseInt(cols[3], 10) || 0,
      lastDate: cols[4] || '',
    });
  }
  return rows;
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const notion = new Client({ auth: NOTION_TOKEN });
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const rows = parseCSV(csvContent);

  console.log(`CSVから ${rows.length} 件のデータを読み込みました。`);
  console.log('Notionへの移行を開始します...\n');

  let created = 0;
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (!row.discordId) { skipped++; continue; }

    try {
      // 既存ユーザーを検索
      const existing = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        filter: { property: 'DiscordID', title: { equals: row.discordId } },
      });

      if (existing.results.length > 0) {
        // 既存ユーザーがいる場合: ポイントを加算
        const page = existing.results[0];
        const currentPoints = page.properties.ポイント?.number || 0;
        const currentAlCount = page.properties.AL権獲得回数?.number || 0;

        const mergedPoints = currentPoints + row.points;
        const mergedAlCount = currentAlCount + row.alCount;

        const updateProps = {
          ポイント: { number: mergedPoints },
          ユーザー名: { rich_text: [{ text: { content: row.username } }] },
        };
        if (page.properties.AL権獲得回数 !== undefined) {
          updateProps.AL権獲得回数 = { number: mergedAlCount };
        }

        await notion.pages.update({ page_id: page.id, properties: updateProps });
        console.log(`[更新] ${row.username} (${row.discordId}) → +${row.points}P 加算 → 合計 ${mergedPoints}P`);
        updated++;
      } else {
        // 新規ユーザーを作成
        await notion.pages.create({
          parent: { database_id: NOTION_DATABASE_ID },
          properties: {
            DiscordID: { title: [{ text: { content: row.discordId } }] },
            ユーザー名: { rich_text: [{ text: { content: row.username } }] },
            ポイント: { number: row.points },
            最終チェックイン日: { rich_text: [{ text: { content: row.lastDate } }] },
            通算チェックイン回数: { number: 0 },
            AL権獲得回数: { number: row.alCount },
            連続ログイン日数: { number: 0 },
          },
        });
        console.log(`[新規] ${row.username} (${row.discordId}) → ${row.points}P`);
        created++;
      }

      // Notion APIのレート制限対策（3リクエスト/秒）
      await sleep(350);
    } catch (err) {
      console.error(`[エラー] ${row.username} (${row.discordId}): ${err.message}`);
      errors++;
    }
  }

  console.log('\n=============================');
  console.log(`移行完了！`);
  console.log(`  新規作成: ${created} 件`);
  console.log(`  ポイント加算（既存）: ${updated} 件`);
  console.log(`  スキップ: ${skipped} 件`);
  console.log(`  エラー: ${errors} 件`);
  console.log('=============================');
}

main();
