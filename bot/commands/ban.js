export default {
    name: 'ban',
    description: 'Ban a member from the server',
    async execute(message, args) {
      if (!message.member.permissions.has('BAN_MEMBERS')) {
        return message.reply("You don't have permission to ban members.");
      }
  
      const member = message.mentions.members.first();
      if (!member) return message.reply('Please mention a valid member to ban.');
  
      try {
        await member.ban();
        message.reply(`${member.user.tag} has been banned.`);
      } catch (error) {
        console.error(error);
        message.reply("I couldn't ban the member.");
      }
    },
  };
  