const errorembed = require("../core/errorembeder.js")
const corembed = require ('../core/correctembed.js')

module.exports = {
    name: 'search',
    aliases: ['sc'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
       if (!message.member.voice.channel) return errorembed(`**${client.emotes.error} Please join a voice channel where I have access <3**!`,message.channel);

         if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return errorembed(`**${client.emotes.error} Be in the same \`VC\` i connect to !**`,message.channel);

        if (!args[0]) return  corembed(`${client.emotes.error} - Please indicate the title of a song !`,message.channel);

        client.player.play(message, args.join(" "));
    },
};