export default {
    name: 'avatar',
    description: 'Displays a user\'s avatar',
    execute(message) {
      const member = message.mentions.members.first() || message.member;
      message.reply(member.user.displayAvatarURL({ dynamic: true, size: 1024 }));
    },
  };
  
