module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: '#29cddc',
                author: { name:`Current Track:`+ track.title },
                footer:  { text: `${message.guild.name}`,
                icon_url: message.guild.iconURL(),
            },
                //icon_url: 'https://cdn.discordapp.com/attachments/726134541638697042/798504710986399774/5ffd7f68840f5034724533.gif',
            
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy.username, inline: true },
                //    { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                 //   { name: 'Views', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                 //   { name: 'Filters activated', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                   // { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                   // { name: 'Currently paused', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: ' Track bar', value: client.player.createProgressBar(message, { timecodes: true }) }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });;
    },
};