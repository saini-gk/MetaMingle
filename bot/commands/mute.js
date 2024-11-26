export default {
    name: 'mute',
    description: 'Mute a user for a specified amount of time',
    async execute(message, args) {
      if (!message.member.permissions.has('MUTE_MEMBERS')) {
        return message.reply("You don't have permission to mute members.");
      }
  
      const member = message.mentions.members.first();
      if (!member) return message.reply('Please mention a valid member to mute.');
  
      const time = args[1]; // Time in minutes
      if (!time || isNaN(time)) return message.reply('Please specify a time in minutes.');
  
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      if (!muteRole) {
        return message.reply('No "Muted" role found in this server.');
      }
  
      try {
        await member.roles.add(muteRole);
        message.reply(`${member.user.tag} has been muted for ${time} minutes.`);
        setTimeout(async () => {
          await member.roles.remove(muteRole);
          message.channel.send(`${member.user.tag} has been unmuted.`);
        }, time * 60000); // Unmute after the specified time
      } catch (error) {
        console.error(error);
        message.reply("I couldn't mute the member.");
      }
    },
  };
  