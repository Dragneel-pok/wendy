
const errorembed = require("../core/errorembeder.js")
const corembed = require ('../core/correctembed.js')
module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue| {prefix}cq',

    execute(client, message) {
        if (!message.member.voice.channel) return errorembed(`**<a:error:800605823985516550> Please join a voice channel where I have access <3**!`,message.channel);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return errorembed(`**<a:error:800605823985516550> Be in the same VC i connect to !**`,message.channel);

        if (!client.player.getQueue(message)) return errorembed(`**<a:error:800605823985516550> No music in my queue** !`,message.channel);

        if (client.player.getQueue(message).tracks.length <= 1) return embeder(`<a:error:800605823985516550> Only **1** song in queue.`,message.channel);

        client.player.clearQueue(message);

        return corembed (`<a:analogtick:800603289539313674> Wendy's Music queue is now **cleared** !`,message.channel);
    },
};