const Discord = require("discord.js");
const Sequelize = require('sequelize')
const fs = require('fs')
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
const commandHandler = require('./command_handler')
client.commands = new Discord.Collection();

client.on("ready",()=>{
    console.log(`Bot iniciado com tag ${client.user.tag}, com ${client.users.size} usuarios`);
    client.user.setActivity(`Half Life 3`);
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
    
    if(newUserChannel==null)return
    if(newUserChannel!=oldUserChannel){
        if(newUserChannel.id=='770417386029187092')return 
        if(newMember.id=='362229189782405122'){
            newUserChannel.join().then(connection=>{//Leonardo Ferreira
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=hrdPqXa9wYY'))
                if (!dispatcher) return message.channel.send('soundNotFound');
                dispatcher.on('end', () => { 
                    play(connection);
                });
            })
        }else if(newMember.id=='248524341057290241'){//Perluxo Clemente
            newUserChannel.join().then(connection=>{
                const dispatcher = connection.play('./audios/VAI NO CABELEIREIRO VERSÃO SEU JORGE_160k.mp3')
                if (!dispatcher) return message.channel.send('soundNotFound');
                dispatcher.on('end', () => { 
                    play(connection);
                });
            })
        }else if(newMember.member.displayName=='aks2512'){//akira fukamizu
            newUserChannel.join().then(connection=>{
                const dispatcher = connection.play('./audios/Omae wa mou shindeiru Original_160k.mp3')
                if (!dispatcher) return message.channel.send('soundNotFound');
                dispatcher.on('end', () => { 
                    play(connection);
                });
            })
        }
        else if(newMember.member.displayName=='Daniel'){//Daniel Bucholz
            newUserChannel.join().then(connection=>{
                const dispatcher = connection.play('./audios/cavalo meme (vídeo original na descrição)_128k.mp3')
                if (!dispatcher) return message.channel.send('soundNotFound');
                dispatcher.on('end', () => { 
                    play(connection);
                });
            })
        }else{
            newUserChannel.join().then(connection=>{
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=hrdPqXa9wYY'))
                if (!dispatcher) return message.channel.send('soundNotFound');
                dispatcher.on('end', () => { 
                    play(connection);
                });
            })
        }
    }
  });

client.on("message",async msg => {
    const comandos_aceitos = require('./indice_comandos.json')
    if(msg.content.startsWith(config.prefix)){
        const command = msg.content.slice(config.prefix.length).trim().split(' ')
        try{
            commandHandler.manusear_indice_comandos(msg,client);
        }catch(err){
            console.log("houve um erro \n"+err)
        }
    }
})

client.login(config.token);

/*
if(command[0]=="adm"){
    if(msg.member.id=='362229189782405122'){
        if(command[1]=='cr'){
            if(command[2]=='cmd')client.commands.get('criar_comando').execute(msg,command[3])
        }else{
            console.log(comandos_aceitos)
        }
    }else{
        msg.reply("Você não tem permissão para usar esse comando!")
    }
    command_adm = null;
}

if(command[0]=="ping"){
    client.commands.get('ping').execute(msg,null)
}else
if(command[0]=="criar"||command[0]=="cr"){
    if(command[1]=="personagem"||command[1]=="p")client.commands.get('criar_personagem').execute(msg,detalhes)
}else
if(command[0]=="listar"||command[0]=="l"){
    if(command[1]=="personagens"||command[1]=="p")client.commands.get('listar_personagens').execute(msg,detalhes)  
}else
if(command[0]=="info"){
    var lista_comandos = new Discord.MessageEmbed();
    lista_comandos.setTitle("Comandos aceitos")
    for(var item in comandos_aceitos){
        lista_comandos.addField(comandos_aceitos)
    }
    msg.channel.send(lista_comandos);
}else{
    msg.reply("Comando não existe, por favor verifique e tente novamente!")
}*/