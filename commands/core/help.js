module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join('| ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join('| ');

            message.channel.send({
                embed: {
                    color: '#29cddc',
                    author: { name: `🔖| ${client.user.username} 's help aka cmds`,
                              icon_url:client.user.displayAvatarURL()
                },
                    footer: { text: 'Feel free to join our support server |always welcomed - Dragneel' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                      //  { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    thumbnail:{url:'https://cdn.discordapp.com/attachments/726134541638697042/798504934588153856/5ffd7f99a0259488765813.gif'},
                 
                     description: ` konichiwaa/hello/Namaste me , am **Wendy** , a discord music bot by **Dragneel#1255**, am pretty descent with support of Youtube and spotify
                     looking forward to grow with everyone cause i am short xD
                      **My**
                      **Home:**  [Home/support](https://discord.gg/7WNNNFaGJX)
                      **Invite-Link:** [Invite me](https://discord.com/oauth2/authorize?client_id=724135554966355968&permissions=0&scope=bot)
                     `,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: '#29cddc',
                    author: { name: `${args[0]} command's info`,
                              icon_url:client.user.displayAvatarURL()
                },
                    footer: { text:" if u find any bugs or problem |report in our server `w!support` "},
                   
                    timestamp: new Date(),
                    description: `**Name:**      ${command.name}
                                  **Category:**  ${command.category}
                                  **Aliase(s):** ${ command.aliases.length < 1 ? 'None' : command.aliases.join(', ')}
                                  **Usage:**     ${command.utilisation.replace('{prefix}', client.config.discord.prefix)}
                    
                    
                    `,
                }
            });
        };
    },
};