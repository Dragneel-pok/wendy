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
           thuumbnail:client.user.displayAvatarURL(),
            title:'!PONG',
            footer: { text:` Uptime = ${uptime}`,
                      icon_url: client.user.displayAvatarURL(),
        },
            fields: [
                { name:`<a:kawaii:740968162912370789> Mah Heart`, value: `${client.ws.ping}ms`,inline = true },
                {name :`<a:latency:799454566021857291> Latency`, value :`${pingMessage.createdTimestamp - message.createdTimestamp}ms`,inline = true}
            ],
            timestamp: new Date(),
            
        },
    })
      })
    //
    },
    }
            
