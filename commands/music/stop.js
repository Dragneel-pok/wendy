module.exports = {
    name: 'stop',
    aliases: ['dc','bye'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.setRepeatMode(message, false);
        const success= client.player.stop(message);

        if (success) message.channel.send({
            embed:{
              color:'#29cddc',
              description:'<a:caution:799597232310452234>  Music stopped | Its hard to see you go ... see yaaa next time ❤️ ! '
              
            }
            
            
          });
    },
};