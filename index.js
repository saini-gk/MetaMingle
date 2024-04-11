const { Client, GatewayIntentBits, MessageEmbed } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

const prefix = '!';

// Command handler
const commands = {
  'rules': message => {
    const embed = new MessageEmbed()
      .setTitle('Server Rules')
      .setDescription('Here are the server rules:')
      .addField('1. Be respectful', 'Be respectful to other members.')
      .addField('2. No spam', 'Do not spam in the server.')
      .addField('3. No NSFW content', 'Keep the server safe for everyone.')
      .setColor('#0099ff');
    message.reply({ embeds: [embed] });
  },
  'hello': message => {
    message.reply("Hi 😃 This is SAINI's Bot");
  },
  'gm': message => {
    message.reply("Good Morning 🌅");
  },
  'gn': message => {
    message.reply("Good Night 🌃");
  },
  'ga': message => {
    message.reply("Good Afternoon");
  },
  'hru': message => {
    message.reply("I'm good! What about you?");
  },
  'bye': message => {
    message.reply("Bye! Have a good day");
  },
  'help': message => {
    const embed = new MessageEmbed()
      .setTitle('Bot Commands')
      .setDescription('Here are the available commands:')
      .addField('!rules', 'Display server rules')
      .addField('!hello', 'Say hello to the bot')
      .addField('!gm', 'Wish good morning')
      .addField('!gn', 'Wish good night')
      .addField('!ga', 'Wish good afternoon')
      .addField('!hru', 'Check how the bot is doing')
      .addField('!bye', 'Bid farewell')
      .setColor('#0099ff');
    message.reply({ embeds: [embed] });
  }
};

client.on('ready', () => {
  console.log(`Bot is ready as: ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  try {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (commands[command]) {
      commands[command](message);
    } else {
      message.reply("Command not found. Type '!help' to see available commands.");
    }
  } catch (error) {
    console.error('An error occurred:', error);
    message.reply('Sorry, an error occurred while processing your command.');
  }
});

client.login('YOUR_BOT_TOKEN');
