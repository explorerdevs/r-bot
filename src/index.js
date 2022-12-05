// Require the necessary discord.js classes
import { Client } from 'discord.js';
import { TOKEN } from './config/index.js';

// Create a new client instance
const client = new Client({ intents: ['Guilds', 'GuildMessages'] });

// Log in to Discord with your client's token
client.login(TOKEN);
