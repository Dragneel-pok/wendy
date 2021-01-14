var parseTime= function(millisesconds){
  var seconds = Math.floor(millisesconds / 1000);
  millisesconds%= 1000;
  var minutes = Math.floor(seconds / 60);
 seconds%= 60;
  var hours = Math.floor(minutes/ 60);
  minutes%= 60;
  var days= Math.floor(hours/ 24);
  hours%= 24;
  var written = false;
  return(
      days? ((written = true),days +`days`): ``) +
      (written ? `, `: ``) +
      (hours?((written - true),hours + `hours`): ``)+
      (written ? `, `: ``) +
      (minutes?((written - true),minutes + `minutes`): ``)+
      (written ? `, `: ``) +
      (seconds? ((written = true),seconds +`seconds`): ``) +
      (written ? `, `: ``) +
     ( milliseconds? ((written = true),milliseconds +`milliseconds`): ``) +
      (milliseconds ? millisesconds + `milliseconds`: ``)

};


module.exports = {
    name: 'wendy/invite',
    aliases: ['support','info',],
    category: 'Infos',
    utilisation: '{prefix}wendy| {prefix}invite',

    execute(client, message) {

        //const used = process.memoryUsage().heapUsed /1024/1024
        message.channel.send({
            embed:{
                color:"#29cddc",
                author:{
                    text:`About + ${client.user.username}`,
                    icon_url:client.user.displayAvatarURL()
                },
                thumbnail:{url:'https://cdn.discordapp.com/attachments/726134541638697042/798506734540161024/tumblr_m0acjiwign1qm9b8do1_r1_500.gif'},
                feild:[
                   {name:'`O.O`Prefix',value:{prefix}},
                   {name:'`>_<`Version',value:client.config.ver},
                   {name:'`;_;`Library ',value:'NodeJS & discord.js <12.5.1>'},
                   {name:'`:-3`Guilds',value:client.guilds.cache.size},
                   {name:'`^.^`Current listeners',value:`${client.users.cache.size}`},
                   {name:'`$_$`Ping',value:`${client.ws.ping}ms`},
                   {name:'`B-)`Uptime',value:parseTime(client.uptime)},

        ],
                description:  `**Made </> with <3 by <@672695020100386846>**
        **My Home|Support server :** [Home](https://discord.gg/7WNNNFaGJX)
        `,
                footer:{ text: 'Keep smiling ,keep loving ',
                icon_url:''

        }








            }
        });
    },
};