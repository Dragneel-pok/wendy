const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel,message) => {
    let embed = new MessageEmbed()
    .setColor("2af58b")
    .setDescription(text)
    .setFooter(`${message.author.tag}`,message.author.displayAvatarURL())
    await channel.send(embed)
}