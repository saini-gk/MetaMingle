export default {
    name: 'userinfo',
    description: 'Displays information about a user',
    execute(message, args) {
      const member = message.mentions.members.first() || message.member;
  
      const userInfo = `
        **Username:** ${member.user.username}
        **Tag:** #${member.user.discriminator}
        **ID:** ${member.id}
        **Joined Server:** ${member.joinedAt.toLocaleDateString()}
        **Account Created:** ${member.user.createdAt.toLocaleDateString()}
      `;
      
      message.reply(userInfo);
    },
  };
  