const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on('ready', () => {
  console.log(`Bot is ready as: ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  // Ignore bot's own messages
  if (message.author.bot) return;

  const content = message.content.trim().toLowerCase();
  if (content === 'rules') {
    message.reply('😃 1. Be cool, kind, and respectful to one another.\n📇 2. Keep your Discord profile appropriate.\n✉️ 3. Do not spam.\n🔔 4. Do not @mention or direct message the staff. See Mods below in the channel for exceptions.\n📣 5. No self-promotion or advertisements.\n🛡️ 6. No personal information.\n🤬 7. No hate speech or harmful language.\n🏛️ 8. No political or religious topics.\n🚨 9. No piracy, sexual, NSFW, or otherwise suspicious content.\n🤔 10. Rules are subject to common sense.');
  }
  if (content === 'hi'|| content === 'hello') {
    message.reply("Hi 😃 This is SAINI's Bot");
  }
  if (content === 'good morning' || content === 'gm') {
    message.reply("Good Morning🌅");
  }
  if (content === 'good night' || content === 'gn') {
    message.reply("Good Night🌃");
  }
  if (content === 'good afternoon' || content === 'ga') {
    message.reply("Good Afternoon");
  }
  if (content === 'how are you'|| content === 'hru') {
    message.reply("I'm good! What about you ?");
  }
  if (content === 'bye'|| content === 'bie') {
    message.reply("Bye! Have a good day");
  }  
});

client.login('MTIwMDcwMjc3OTkyNTIwMDk2OA.G8iOq6.n9BK5LTbj_ZLXOUk7GSgKzexARc7lkB7l3JTsE');
