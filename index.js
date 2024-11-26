import { Client, GatewayIntentBits } from 'discord.js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath, pathToFileURL } from 'url';

// Load environment variables
dotenv.config();

// Ensure BOT_TOKEN is available
if (!process.env.BOT_TOKEN) {
  console.error('BOT_TOKEN is not defined in the environment variables.');
  process.exit(1);
}

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const prefix = "!";

// Load all command files dynamically
const commands = new Map();
const commandDir = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandDir).filter(file => file.endsWith('.js'));

// Dynamically import each command
async function loadCommands() {
  for (const file of commandFiles) {
    const commandPath = path.join(commandDir, file);
    
    // Fix: Convert the commandPath to a proper file URL using file:// scheme
    const commandUrl = pathToFileURL(commandPath).href;
    
    try {
      const command = await import(commandUrl);
      if (command.default) {
        commands.set(command.default.name, command.default);
      }
    } catch (error) {
      console.error('Error loading command:', error);
    }
  }
}

// Error logging function
function logError(error) {
  const errorMessage = `${new Date().toISOString()} - ${error.stack || error}\n`;
  fs.appendFileSync('error.log', errorMessage, 'utf8');
}

// Listen for ready event
client.once('ready', () => {
  console.log(`Bot is ready as: ${client.user.tag}`);
});

// Handle messages and commands
client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = commands.get(commandName);
  if (command) {
    try {
      await command.execute(message, args);
    } catch (error) {
      console.error('Error executing command:', error);
      logError(error);  // Log error to file
      message.reply('Sorry, an error occurred while processing your command.');
    }
  } else {
    message.reply('Command not found. Type `!help` for a list of commands.');
  }
});

// Log unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logError(reason);  // Log unhandled rejection
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Log uncaught exceptions
process.on('uncaughtException', (error) => {
  logError(error);  // Log uncaught exceptions
  console.error('Uncaught Exception:', error);
});

// Login to Discord with your bot's token
client.login(process.env.BOT_TOKEN)
  .then(() => {
    // Load commands after the bot is logged in
    loadCommands();
  })
  .catch((error) => {
    console.error('Error logging in:', error);
  });
