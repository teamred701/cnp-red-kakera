const { Client } = require('@notionhq/client');
const jwt = require('jsonwebtoken');

function getTodayJST() {
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
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

  const props = result.results[0].properties;
  const today = getTodayJST();
  const lastDate = props.最終チェックイン日.rich_text[0]?.plain_text || '';

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      discord_username: payload.discord_username,
      points: props.ポイント.number || 0,
      al_count: props.AL権獲得回数?.number || 0,
      total_checkins: props.通算チェックイン回数.number || 0,
      streak: props.連続ログイン日数?.number || 0,
      last_checkin_date: lastDate,
      already_checked_in: lastDate === today,
    }),
  };
};
