const Discord = require("discord.js");
const Sequelize = require('sequelize')
const fs = require('fs')
const client = new Discord.Client();
const config = require("./config.json");
const db_functions = require("./DB_functions");
const db_tables = require("./DB_tables");
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready",()=>{
    console.log(`Bot iniciado com tag ${client.user.tag}, com ${client.users.size} usuarios`);
    client.user.setActivity(`Half Life 3`);
    db_tables.load_config();
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
        console.log(JSON.stringify(newMember.id))
        if(newMember.id=='362229189782405122'){
            newUserChannel.join().then(connection=>{//Leonardo Ferreira
                const dispatcher = connection.play('./audios/meme eta porra com fundo verde_160k.mp3')
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
        }
    }
  });

client.on("message",async msg => {
    const comandos_aceitos = require('./indice_comandos.json')
    if(msg.content.startsWith(config.prefix)){
        const command = msg.content.slice(config.prefix.length).trim().split(' ')
        const detalhes =  {
            autor:msg.author.username,
            argumentos:command[1]
        }
        try{
            console.log(command)
            for(var i=0;i<comandos_aceitos.length;i++){
                console.log(comandos_aceitos[i])
            }
            if(command[0]=="ping"){
                client.commands.get('ping').execute(msg,null)
            }
            if(command[0]=="criar"||command[0]=="cr"){
                client.commands.get('criar_personagem').execute(msg,detalhes)
            }
            if(command[0]=="listar"||command[0]=="l"){
                if(command[1]=="personagens"||command[1]=="p"){
                    client.commands.get('listar_personagens').execute(msg,detalhes)
                } 
            }
            if(command[0]=="info"){
                var lista_comandos = "\n\n"
                console.log(comandos_aceitos)
                for(var item in comandos_aceitos){
                    lista_comandos = lista_comandos+'<h1>'+item+'</h1>'
                    lista_comandos = lista_comandos+","
                }
                msg.channel.send(lista_comandos);
            }
        }catch(err){
            console.log("houve um erro \n"+err)
        }
    }
})

client.login(config.token);