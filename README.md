# 𝗫 𝗥𝗢𝗠𝗘𝗢 𝗠𝗗 🍒💋

A Railway-ready Telegram controller for an opt-in WhatsApp pairing service. The project preserves the existing WhatsApp command set and adds a Telegram `/start` menu, `/menu`, `/pair`, `/unpair`, `/ping`, `/alive`, and `/channel` controls.

> Pair only a WhatsApp number whose owner has explicitly requested the connection. No software can guarantee that WhatsApp will never restrict or ban an account; compliant, low-volume, opt-in use is required.

## Railway setup

Create a Railway service from this repository and add the variables below under **Variables**. Never commit the real Telegram token to GitHub.

| Variable | Required | Purpose |
|---|---:|---|
| `BOT_TOKEN` | Yes | Telegram BotFather token |
| `BOT_NAME` | No | Display name, defaults to `𝗫 𝗥𝗢𝗠𝗘𝗢 𝗠𝗗 🍒💋` |
| `OWNER_NAME` | No | Owner display name |
| `OWNER_PHONE` | No | Owner phone used by the WhatsApp command layer |
| `OWNER_TELEGRAM_ID` | No | Telegram owner ID |
| `OWNER_TELEGRAM_USERNAME` | No | Telegram owner username without `@` |
| `WHATSAPP_CHANNEL_JID` | No | WhatsApp newsletter JID |
| `REQUIRED_TELEGRAM_CHANNELS` | No | Optional comma-separated Telegram channels required before pairing |

The repository includes `.env.example` as a template. Copy its values into Railway Variables, then redeploy. The start command is already defined as `node index.js` in `package.json`.

## Telegram controls

Use `/start` to open the visual menu. `/menu` lists the main actions. `/pair 916297935330` starts an opt-in WhatsApp device-linking flow, while `/unpair 916297935330` removes a stored pairing. `/ping` checks the Telegram service, `/alive` shows the bot status, and `/channel` opens the official WhatsApp channel.

The provided artwork is stored locally as `media/bot-image.jpg`, so the Telegram start message does not depend on an external image host.

## Security

The real token is intentionally absent from this archive. If a token was shared in chat, screenshots, commits, or logs, revoke it in BotFather and create a replacement before deployment. Keep `.env`, pairing sessions, and generated credentials private.
