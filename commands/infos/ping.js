const time = require('ms')
module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
      const uptime = time(client.uptime);

      message.channel.send("Pingi pongi.....").then((sent) => {
        sent.edit({
        embed: {
            color: 'RANDOM',
           thuumbnail:{url:`${client.user.displayAvatarURL()}`},
            title:'!PONG',
            footer: { text:` Uptime = ${uptime}`,
                      icon_url: client.user.displayAvatarURL(),
        },
            fields: [
                {name:'<a:kawaii:800603315275563039> Mah Heart', value: `${client.ws.ping}ms`,inline :true },
                {name :`<a:latency:800603282585157663> Latency`, value :`${new Date() -  new Date(message.createdTimestamp)}ms`,inline : true},
            ],
            timestamp: new Date(),
            
        },
    })
      })
    //
    },
    }
            
