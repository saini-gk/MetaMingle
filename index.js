const { Client, GatewayIntentBits, MessageEmbed } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

const prefix = '!';

// Simulated database (replace with an actual database)
const database = {
  // Example of storing command permissions
  permissions: {
    'rules': ['ADMINISTRATOR', 'MODERATOR'],
    'kick': ['ADMINISTRATOR'],
    // Add more commands and their required permissions as needed
  }
};

// Command handler
const commands = {
  'rules': {
    permission: 'USER', // Default permission
    execute: message => {
      const embed = new MessageEmbed()
        .setTitle('Server Rules')
        .setDescription('Here are the server rules:')
        .addField('1. Be respectful', 'Be respectful to other members.')
        .addField('2. No spam', 'Do not spam in the server.')
        .addField('3. No NSFW content', 'Keep the server safe for everyone.')
        .setColor('#0099ff');
      message.reply({ embeds: [embed] });
    }
  },
  'kick': {
    permission: 'ADMINISTRATOR',
    execute: message => {
      // Implementation of kick command
    }
  },
  // Add more commands here
};

client.on('ready', () => {
  console.log(`Bot is ready as: ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  try {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands[commandName];
    if (command) {
      const requiredPermission = database.permissions[commandName] || 'USER';
      if (hasPermission(message.member, requiredPermission)) {
        command.execute(message);
      } else {
        message.reply("You don't have permission to use this command.");
      }
    } else {
      message.reply("Command not found. Type '!help' to see available commands.");
    }
  } catch (error) {
    console.error('An error occurred:', error);
    message.reply('Sorry, an error occurred while processing your command.');
  }
});

function hasPermission(member, requiredPermission) {
  // Check if the member has the required permission role
  // You need to implement this based on your role structure
  return member.roles.cache.some(role => role.name === requiredPermission);
}

client.login('YOUR_BOT_TOKEN');
