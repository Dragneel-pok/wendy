module.exports = (client, message, track) => {

    message.channel.send({
        embed: {
            color: '#29cddc',
            author: { name: `Now playing :` + track.title,
                      icon_url: 'https://cdn.discordapp.com/attachments/726134541638697042/798842241145765958/Music.gif',
        },
            footer: { text: `Playing in  ${message.guild.name}`,
            icon_url: message.guild.iconURL(),
        },
            description: `
            Connected to: ${message.member.voice.channel.name}
            YT-Channel:   ${track.author}
            Requested by: ${track.requestedBy.username}
            From playlist:${track.fromPlaylist ? 'Yes' : 'No'}      
            Views:        ${track.views}
            Duration:     ${track.duration}
            Volume:       ${client.player.getQueue(message).volume }
            Repeat mode:  ${client.player.getQueue(message).repeatMode ? 'Yes' : 'No' }
            `  
            ,
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        
        },
    });
 // { name: 'Link', value: [Link](trackURL), inline: true }
 // Filters activated:${filters.length + '/' + client.filters.length}

   // message.channel.send(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
};