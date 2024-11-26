export default {
    name: 'suggest',
    description: 'Submit a suggestion to the server',
    async execute(message, args) {
      const suggestion = args.join(' ');
      if (!suggestion) {
        return message.reply('Please provide a suggestion.');
      }
  
      const suggestionChannel = message.guild.channels.cache.find(ch => ch.name === 'suggestions');
      if (!suggestionChannel) {
        return message.reply('No suggestion channel found.');
      }
  
      await suggestionChannel.send(`New suggestion from ${message.author.tag}: ${suggestion}`);
      message.reply('Your suggestion has been submitted!');
    },
  };
  