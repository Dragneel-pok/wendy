module.exports = async (client) => {
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(`w!help | ver 1.0 music system`,{
    type: "STREAMING",
    url:'https://www.twitch.tv/.',

    });
};