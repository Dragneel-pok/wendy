module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
      

     message.channel.send({
        embed: {
            color: 'RANDOM',
           
        
            footer: { text:`${client.user.username}`,
                      icon_url: client.user.displayAvatarURL(),
        },
            fields: [
                { name: '<a:kawaii:740968162912370789> Mah Heart', value: `${client.ws.ping}ms` },
            ],
            timestamp: new Date(),
            
        },
    })
    },



    }
            
