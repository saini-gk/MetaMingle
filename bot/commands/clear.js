export default {
    name: 'clear',
    description: 'Clear a specified number of messages',
    async execute(message, args) {
      if (!message.member.permissions.has('MANAGE_MESSAGES')) {
        return message.reply("You don't have permission to clear messages.");
      }
  
      const amount = parseInt(args[0]);
  
      if (isNaN(amount) || amount <= 0 || amount > 100) {
        return message.reply('Please specify a number between 1 and 100.');
      }
  
      try {
        await message.channel.bulkDelete(amount, true);
        message.reply(`Deleted ${amount} messages.`);
      } catch (error) {
        console.error(error);
        message.reply('There was an error trying to clear the messages.');
      }
    },
  };
  