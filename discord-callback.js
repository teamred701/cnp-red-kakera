const { Client } = require('@notionhq/client');
const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
  const { code, error } = event.queryStringParameters || {};
  const {
    DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET,
    DISCORD_REDIRECT_URI,
    NOTION_TOKEN,
    NOTION_DATABASE_ID,
    JWT_SECRET,
    SITE_URL,
  } = process.env;

  if (error || !code) {
    return {
      statusCode: 302,
      headers: { Location: `${SITE_URL}/checkin.html?error=cancelled` },
    };
  }

  // Discord: code → access token
  const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: DISCORD_REDIRECT_URI,
    }),
  });

  if (!tokenRes.ok) {
    return {
      statusCode: 302,
      headers: { Location: `${SITE_URL}/checkin.html?error=auth_failed` },
    };
  }

  const tokenData = await tokenRes.json();

  // Discord: ユーザー情報取得
  const userRes = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });

  if (!userRes.ok) {
    return {
      statusCode: 302,
      headers: { Location: `${SITE_URL}/checkin.html?error=user_failed` },
    };
  }

  const user = await userRes.json();

  // Notion: ユーザー検索 or 作成
  const notion = new Client({ auth: NOTION_TOKEN });

  const existing = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: { property: 'DiscordID', title: { equals: user.id } },
  });

  if (existing.results.length === 0) {
    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        DiscordID: { title: [{ text: { content: user.id } }] },
        ユーザー名: { rich_text: [{ text: { content: user.username } }] },
        ポイント: { number: 0 },
        最終チェックイン日: { rich_text: [{ text: { content: '' } }] },
        通算チェックイン回数: { number: 0 },
        AL権獲得回数: { number: 0 },
        連続ログイン日数: { number: 0 },
      },
    });
  } else {
    // ユーザー名が変わっていれば更新
    const page = existing.results[0];
    const savedName = page.properties.ユーザー名.rich_text[0]?.plain_text || '';
    if (savedName !== user.username) {
      await notion.pages.update({
        page_id: page.id,
        properties: {
          ユーザー名: { rich_text: [{ text: { content: user.username } }] },
        },
      });
    }
  }

  // JWT 発行（7日有効）
  const token = jwt.sign(
    { discord_user_id: user.id, discord_username: user.username },
    JWT_SECRET,
    { expiresIn: '30d' }
  );

  return {
    statusCode: 302,
    headers: { Location: `${SITE_URL}/checkin.html?token=${token}` },
  };
};
