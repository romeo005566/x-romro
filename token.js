require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is missing. Add it in Railway Variables.');
}

module.exports = { BOT_TOKEN };
