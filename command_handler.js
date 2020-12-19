const Discord = require("discord.js")
const Sequelize = require('sequelize')
const fs = require('fs')
const config = require("./config.json")
const indice_comandos = require('./indice_comandos.json')

var commandFiles = indice_comandos
function carregar_comandos(){
    const command = require(`./comandos/${arquivo}`);
    client.commands.set(command.name, command);
    for(var tipo in indice_comandos){
        commandFiles = fs.readdirSync('./comandos/'+tipo).filter(file => file.endsWith('.js'))
        commandFiles.forEach((arquivo)=>{
            const command = require(`./comandos/${tipo}/${arquivo}`);
            client.commands.set(command.name, command);
        })
    }
}

function manusear_indice_comandos(msg,client){//percorre o arquivo indice_comandos.json
    carregar_comandos();
    try{
        client.commands.get(command).execute
    }catch(e){
        console.log(e);
        msg.reply("comando não existe!")
    }
}


module.exports = {
    manusear_indice_comandos:manusear_indice_comandos
}