module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        const queue = client.player.getQueue(message);
        const track = client.player.nowPlaying(message);
        
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);

        message.channel.send({
            embed: {
              color:'#29cddc',
              author:{
                  text:`${message.guild.name} + 's Queue`,
                  icon_url:'https://media.discordapp.net/attachments/726134541638697042/799260530296619028/1a392bd3bbb24b234a6c736894d8efbf.gif'
              },
              title:`Current : ${queue.playing.title} | [by ${track.requestedBy.username}]`,
              description:  queue.tracks.map((track, i) => {
                return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
                }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...`  :``}`,

              field:[
                  {name:'Loop-mode :',value: `${client.player.getQueue(message).loopMode ? '(looped)' : ''}`},
                  {name:'Total in Queue',value:`${queue.tracks.length}`}

              ]



            }
        })
    },
};
/*`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\n

Current : ${queue.playing.title} | Req by \`\n\n` + 
(queue.tracks.map((track, i) => {
return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));*/