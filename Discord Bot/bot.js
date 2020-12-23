const Discord = require("discord.js");
const Sequelize = require('sequelize')
const fs = require('fs')
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const commandHandler = require('./command_handler')
client.commands = new Discord.Collection();

var commands

function load_commands(cmddir){
    if(cmddir==undefined)cmddir='./commands'
    const dir_list = fs.readdirSync(cmddir)
    dir_list.forEach((dir)=>{
        if(!dir.endsWith(".js")){
            console.log(cmddir+'/'+dir)
            load_commands(cmddir+'/'+dir)
        }else{
            let command = require(cmddir+'/'+dir)
            client.commands.set(command.name,command)
        }
    })
}

function similar_commands(msg){
    const command = msg.content.slice(config.prefix.length).trim().split(' ')
    var cmdDir =  msg.content.slice(config.prefix.length).replace(' ','/');
    try{
        for(var i=command.length-1;i>=0;i--){
            if(fs.existsSync('./commands/'+cmdDir+'.js')){
                return "\ntry: +"+cmdDir.replace('/',' ')
            }else{
                cmdDir = cmdDir.replace(command[i],'').slice(0,-1)
                console.log(cmdDir)
            }
        }
    }catch(e){
        console.log(e)
        return ""
    }
    return ""
}

client.on("ready",()=>{
    console.log(`Bot iniciado com tag ${client.user.tag}, com ${client.users.size} usuarios`);
    client.user.setActivity(`Half Life 3`);
    load_commands();
})

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}. População: ${guild.memberCount})`);
    client.user.setActivity(`Jogando Jogando`);
})

client.on("guildRemove", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id}. População: ${guild.memberCount})`);
    client.user.setActivity(`Jogando Jogando`);
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channel
    let oldUserChannel = oldMember.channel
    
    var music_list = {
        "362229189782405122":"https://youtu.be/mFbQjQ6S_TU?t=4",//leonardo
        "238837419820974083":"https://www.youtube.com/watch?v=hrdPqXa9wYY",
        "248524341057290241":"https://www.youtube.com/watch?v=tuF5imp46rQ",
        "384542742765764628":"https://www.youtube.com/watch?v=hrdPqXa9wYY",
    }
    if(newUserChannel==null)return
    if(newUserChannel!=oldUserChannel){
        if(newUserChannel.id=='770417386029187092')return 
        if(music_list[newMember.id]!=null){
            newUserChannel.join().then(async (connection)=>{//Leonardo Ferreira
                const dispatcher = await connection.play(ytdl(music_list[newMember.id],{filter:'audioonly'}))
                if (!dispatcher) return message.channel.send('soundNotFound');
                dispatcher.on('end', () => { 
                    play(connection);
                });
            })
        }
    }
  });

client.on("message",msg => {
    try{
        if(msg.content.startsWith(config.prefix)){
            if(commandHandler.manusear_indice_comandos(msg,client)==false){
                const command = msg.content.slice(config.prefix.length).trim().split(' ')
                var reply = "Comando Inválido!"
                reply += similar_commands(msg)
                msg.reply(reply)
            }
        }
    }catch(err){
        console.log("houve um erro \n"+err)
    }
})

client.login(config.token);