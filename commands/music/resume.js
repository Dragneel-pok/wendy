const errorembed = require("../core/errorembeder.js")
const corembed = require ('../core/correctembed.js')


module.exports = {
    name: 'resume',
    aliases: ['res','r'],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return errorembed (`${client.emotes.error} **Please join a voice channel where I have access <3**!`,message.channel);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return errorembed(`${client.emotes.error} **Be in the same \`VC\` i connect to !**`,message.channel);

        if (!client.player.getQueue(message)) return errorembed(`${client.emotes.error} **There is no music currently playing !**`,message.channel);

        if (!client.player.getQueue(message).paused) return corembed(`${client.emotes.error} **There is music  already playing !**`,message.channel);

        const success = client.player.resume(message);

         if (success) message.channel.send({
                embed:
                {
                    color:`#9bff00`,
                    author:{
                         name: `\`Song \`  ${client.player.getQueue(message).playing.title}`,
                        },
                        fields:[
                            {name:`Status :`,value:`Resumed| **:)**`},
                        ],  
    
                }
            });
            
          
        
    },
};