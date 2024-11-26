import fetch from 'node-fetch';

export default {
  name: 'joke',
  description: 'Get a random joke',
  async execute(message) {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      message.reply(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error(error);
      message.reply('Sorry, I could not fetch a joke right now.');
    }
  },
};
