import { config } from 'dotenv'; config();

export const GUILD_ID = String(process.env.GUILD_ID);
export const BOT_TOKEN = String(process.env.BOT_TOKEN);
export const IGNORE_BOTS = String(process.env.IGNORE_BOTS);
export const IGNORE_MEMBERS = String([process.env.IGNORE_MEMBERS]);
export const KICK_INTERVAL = Number(process.env.KICK_INTERVAL);

if (typeof GUILD_ID !== 'string') {
  throw new TypeError('GUILD_ID must be a string');
}

if (typeof BOT_TOKEN !== 'string') {
  throw new TypeError('BOT_TOKEN must be a string');
}

if (typeof IGNORE_BOTS !== 'string') {
  throw new TypeError('IGNORE_BOTS must be a string');
}

if (typeof IGNORE_MEMBERS !== 'string') {
  throw new TypeError('IGNORE_MEMBERS must be an array');
}

if (typeof KICK_INTERVAL !== 'number' || KICK_INTERVAL < 5000) {  
  throw new TypeError('KICK_INTERVAL must be a number and higher than 5000 (5s)');
}