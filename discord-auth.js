exports.handler = async () => {
  const { DISCORD_CLIENT_ID, DISCORD_REDIRECT_URI } = process.env;

  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify',
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://discord.com/api/oauth2/authorize?${params}`,
    },
  };
};
