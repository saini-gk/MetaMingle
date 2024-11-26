export default {
    name: 'ping',
    description: 'Check the bot\'s latency',
    execute(message) {
      const sent = Date.now();
      message.reply('Pong!').then(sentMessage => {
        const ping = Date.now() - sent;
        sentMessage.edit(`Pong! Latency is ${ping}ms.`);
      });
    },
  };
  