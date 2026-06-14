const { Client } = require('@notionhq/client');
const jwt = require('jsonwebtoken');

function getTodayJST() {
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().split('T')[0];
}

function getYesterdayJST() {
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  jst.setDate(jst.getDate() - 1);
  return jst.toISOString().split('T')[0];
}

exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  const token = authHeader.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return { statusCode: 401, headers, body: JSON.stringify({ error: 'Invalid token' }) };
  }

  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const result = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: { property: 'DiscordID', title: { equals: payload.discord_user_id } },
  });

  if (result.results.length === 0) {
    return { statusCode: 404, headers, body: JSON.stringify({ error: 'User not found' }) };
  }

  const page = result.results[0];
  const props = page.properties;
  const today = getTodayJST();
  const yesterday = getYesterdayJST();
  const lastDate = props.最終チェックイン日.rich_text[0]?.plain_text || '';

  if (lastDate === today) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        already: true,
        points: props.ポイント.number || 0,
        al_count: props.AL権獲得回数?.number || 0,
        total_checkins: props.通算チェックイン回数.number || 0,
        streak: props.連続ログイン日数?.number || 0,
      }),
    };
  }

  // 連続ログイン日数を計算（昨日チェックイン済みなら継続、それ以外はリセット）
  const currentStreak = props.連続ログイン日数?.number || 0;
  const newStreak = lastDate === yesterday ? currentStreak + 1 : 1;

  // ポイント計算（基本+1、7の倍数でボーナス+4）
  const bonusPoints = newStreak % 7 === 0 ? 4 : 0;
  const earnedPoints = 1 + bonusPoints;
  const streakToSave = newStreak;
  let newPoints = (props.ポイント.number || 0) + earnedPoints;
  let newAlCount = props.AL権獲得回数?.number || 0;
  let alAchieved = false;

  if (newPoints >= 120) {
    newAlCount += 1;
    newPoints = 0;
    alAchieved = true;
  }

  const newTotalCheckins = (props.通算チェックイン回数.number || 0) + 1;

  // 必須プロパティだけ更新。オプションのカラム（連続ログイン日数・AL権獲得回数）は
  // Notion DB に存在する場合のみ含める（存在しない列を更新するとAPIエラーになるため）
  const updateProperties = {
    ポイント: { number: newPoints },
    最終チェックイン日: { rich_text: [{ text: { content: today } }] },
    通算チェックイン回数: { number: newTotalCheckins },
    ユーザー名: { rich_text: [{ text: { content: payload.discord_username } }] },
  };

  if (props.AL権獲得回数 !== undefined) {
    updateProperties.AL権獲得回数 = { number: newAlCount };
  }
  if (props.連続ログイン日数 !== undefined) {
    updateProperties.連続ログイン日数 = { number: streakToSave };
  }

  await notion.pages.update({
    page_id: page.id,
    properties: updateProperties,
  });

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      points: newPoints,
      al_count: newAlCount,
      total_checkins: newTotalCheckins,
      al_achieved: alAchieved,
      streak: newStreak,
      bonus_earned: bonusPoints > 0,
      bonus_points: bonusPoints,
      earned_points: earnedPoints,
    }),
  };
};
