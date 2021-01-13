module.exports = {
    name: 'wendy/invite',
    aliases: ['support'],
    category: 'Infos',
    utilisation: '{prefix}wendy| {prefix}invite',

    execute(client, message) {
        message.channel.send({
            embed:{
                color:"",
                author:{
                    text:`About + ${client.user.username}`,
                    icon_url:client.user.displayAvatarURL()
                },
                thumbnail:{url:''}









            }
        });
    },
};