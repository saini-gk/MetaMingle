import discord from 'discord.js';
const { MessageEmbed } = discord;

export default {
  name: 'rules',
  description: 'Display server rules',
  execute(message) {
    const embed = new MessageEmbed()
      .setTitle('Server Rules')
      .setDescription('Here are the server rules:')
      .addFields(
        { name: '1. Be respectful', value: 'Be respectful to other members.' },
        { name: '2. No spam', value: 'Do not spam in the server.' },
        { name: '3. No NSFW content', value: 'Keep the server safe for everyone.' }
      )
      .setColor('#0099ff');
    
    message.reply({ embeds: [embed] });
  },
};
