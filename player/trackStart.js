module.exports = (client, message, track) => {

    message.channel.send({
        embed: {
            color: '#29cddc',
            author: { name: `Playing :` + [track.title](track.url),
                      icon_url: 'https://cdn.discordapp.com/attachments/726134541638697042/798842241145765958/Music.gif',
        },
            footer: { text: `Playing in  ${message.guild.name}`,
            icon_url: message.guild.iconURL(),
        },feild:[
            {
                "name":"Connected to",
                "value":message.member.voice.channel.name,
                "inline":true
            },
           
            {
                "name":"Requested by",
                "value":track.requestedBy.username,
                "inline":true
            },
            
            {
                "name":"Duration",
                "value":track.duration,
                "inline":true
            },
            {
                "name":"Volume",
                "value":client.player.getQueue(message).volume ,
                "inline":true
            },
            {
                "name":"Repeat mode",
                "value":client.player.getQueue(message).repeatMode ? 'Yes' : 'No',
                "inline":true
            }
        ],
           
           description:`Track : ${track.url}`,
            
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        
        },
    });
 // { name: 'Link', value: [Link](trackURL), inline: true }
 // Filters activated:${filters.length + '/' + client.filters.length}

   // message.channel.send(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
};