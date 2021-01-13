module.exports = (client, message, track) => {

    message.channel.send({
        embed: {
            color: '#29cddc',
            author: { name: `Now playing |` + track.title,
                      icon_url: 'https://cdn.discordapp.com/attachments/726134541638697042/798842241145765958/Music.gif',
        },
            footer: { text: `Playing in  ${message.guild.name}`,
            icon_url: message.guild.iconURL(),
        },
            fields: [
                {name:'Connected to',value: message.member.voice.channel.name, inline: true},
                { name: 'YT-Channel', value: track.author, inline: true },
                { name: 'Requested by', value: track.requestedBy.username, inline: true },
                { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },
               // { name: 'Link', value: [Link](trackURL), inline: true },
               { name: 'Views', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
             //   { name: 'Filters activated', value: filters.length + '/' + client.filters.length, inline: true },

                { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
               // { name: 'Currently paused', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

             //   { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true })}
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });



   // message.channel.send(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
};