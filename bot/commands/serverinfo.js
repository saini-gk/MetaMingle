export default {
    name: 'serverinfo',
    description: 'Displays information about the server',
    execute(message) {
      const serverInfo = `
        **Server Name:** ${message.guild.name}
        **Server ID:** ${message.guild.id}
        **Total Members:** ${message.guild.memberCount}
        **Created At:** ${message.guild.createdAt.toLocaleDateString()}
        **Region:** ${message.guild.region}
      `;
      
      message.reply(serverInfo);
    },
  };
  