export default {
    name: 'roll',
    description: 'Roll a die and return a random number',
    execute(message, args) {
      const max = parseInt(args[0]);
      if (isNaN(max) || max <= 0) {
        return message.reply('Please specify a valid number greater than 0.');
      }
  
      const result = Math.floor(Math.random() * max) + 1;
      message.reply(`You rolled a ${result} (1-${max}).`);
    },
  };
  