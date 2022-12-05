import { config } from 'dotenv';

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

export { TOKEN, CLIENT_ID, GUILD_ID };
