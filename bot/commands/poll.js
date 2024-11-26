export default {
    name: 'poll',
    description: 'Create a simple poll with yes/no options',
    async execute(message, args) {
      const pollQuestion = args.join(' ');
      if (!pollQuestion) {
        return message.reply('Please provide a question for the poll.');
      }
  
      const pollMessage = await message.channel.send(`**Poll:** ${pollQuestion}`);
      await pollMessage.react('👍');
      await pollMessage.react('👎');
    },
  };
  