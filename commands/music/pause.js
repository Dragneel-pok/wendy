
const errorembed = require("../core/errorembeder.js")
const corembed = require ('../core/correctembed.js')


module.exports = {
    name: 'pause',
    aliases: ['pa'],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return errorembed(`**${client.emotes.error} - Please join a voice channel where I have access <3**!`,message.channel);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return errorembed(`**${client.emotes.error} Be in the same \`VC\` i connect to !**`,message.channel);

        if (!client.player.getQueue(message)) return errorembed (`${client.emotes.error} Nope, nothing played in music queue! what to pause!**`,message.channel);

        if (client.player.getQueue(message).paused) return corembed(`${client.emotes.error}  The music, it's already paused !`);

        client.player.pause(message);

        message.channel.send(`Reeeeeeeeeee`).then((send => {

        
        send.edit({
            embed:
            {
                color:`RED`,
                author:{
                     name: `Song| ${client.player.getQueue(message).playing.title}`,
                    },
                    field:[
                        {name:`Status`,value:`Paused| **:^**`},
                    ], 

            }
        })
        
      
    }));












    },
};