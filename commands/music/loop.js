const errorembed = require("../core/errorembeder.js")
const corembed = require ('../core/correctembed.js')


module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: `{prefix}loop - toggles on/off of loop and single song loop
    {prefix}loop queue - toggles on/off of queue loop and loops entire queue
    
    `,

    execute(client, message, args) {
        if (!message.member.voice.channel) return errorembed(`**<a:error:800605823985516550> Please join a voice channel where I have access <3**!`,message.channel);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return errorembed(`**<a:error:800605823985516550> Be in the same \`VC\` i connect to !**`,message.channel);

        if (!client.player.getQueue(message)) return errorembed(`**<a:error:800605823985516550> Nope, nothing played in music queue! add some!**`,message.channel);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return corembed (`<a:analogtick:800603289539313674> Loop mode \`Queue\` disabled!`,message.channel)
            } else {
                client.player.setLoopMode(message, true);
                return corembed (`<a:analogtick:800603289539313674> Looping **enabled!**. Entire Music queue on repeat now`,message.channel);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return corembed(`<a:analogtick:800603289539313674> - Loop mode \`Single song\` **disabled** !`,message.channel);
            } else {
                client.player.setRepeatMode(message, true);
                return corembed(`<a:analogtick:800603289539313674> Looping **enabled!**.Current music will be repeated  !`,message.channel);
            };
        };
    },
};