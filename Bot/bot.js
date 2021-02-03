const Discord = require("discord.js");
const Sequelize = require('sequelize')
const fs = require('fs')
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const commandHandler = require('./command_handler');
const play = require("./commands/music/play");
const { find_command_category, load_commands } = require("./command_handler");
client.commands = new Discord.Collection();

client.commands = load_commands(client.commands,'./commands')

client.on("ready",()=>{
    console.log(`Bot iniciado com tag ${client.user.tag}, com ${client.users.size} usuarios`);
    client.user.setActivity(`Half Life 3`);
})

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}. População: ${guild.memberCount})`);
    fs.writeFileSync('./config/guilds/')
    client.user.setActivity(`Jogando Jogando`);
})

client.on("guildRemove", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id}. População: ${guild.memberCount})`);
    client.user.setActivity(`Jogando Jogando`);
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channel
    let oldUserChannel = oldMember.channel
    var music_list = require('./music_list.json')
    if(newUserChannel==null)return
    if(newUserChannel!=oldUserChannel){
        var musicInfo = music_list[newMember.id][newUserChannel.id]||null
        if(musicInfo&&musicInfo.play){
            newUserChannel.join().then(async (connection)=>{//Leonardo Ferreira
                const dispatcher = await connection.play(ytdl(musicInfo.url,{filter:'audioonly'}))
                dispatcher.on('end', () => { 
                    play(connection);
                });

                dispatcher.on("finish", () =>{
                    connection.disconnect();
                });
            })
        }
    }
  });

client.on("message",msg => {
    try{
        if(msg.content.startsWith(config.prefix)){
            if(commandHandler.handle_commands(msg,client)==false){
                const command = msg.content.slice(config.prefix.length).trim().split(' ')
                var reply = "Command not found!"
                reply += find_command_category(msg)||''
                msg.reply(reply)
            }
        }
    }catch(err){
        console.log("Error: \n"+err)
    }
})

client.login(config.token);