// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { TOKEN } from './config/index.js';

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`${c.user.username} is ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  console.log(message.content);
  console.log(message.createdAt.toDateString());
  console.log(message.author.tag);
});

client.on(Events.GuildMemberAdd, (member) => {
  console.log(member.displayName);
});

// Log in to Discord with your client's token
client.login(TOKEN);
