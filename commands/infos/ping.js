module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
      

     message.channel.send({
        embed: {
            color: 'RANDOM',
           
        
            footer: { text: `Ping for  ${client.user.username}`,
                      icon_url: client.user.displayAvatarURL(),
        },
            fields: [
                { name: '💓|Mah Heart', value: `${client.ws.ping}ms` },
            ],
            timestamp: new Date(),
            
        },
    })
    },



    }
            
