const { Message, MessageEmbed } = require('discord.js');
const { Sequelize } = require('sequelize');
const tabelas = require('./DB_tables')

async function insere_personagem(nomePersonagem,message){
    const NewPersonagem = tabelas.Personagem.create({
        nome:nomePersonagem,
        descrição:"nenhuma",
        username:message.author.id
    }).then(function(res){
            return message.reply('Criado Personagem:\n'+nomePersonagem)
    }).catch(function(err){
        if(err.name === 'SequelizeUniqueConstraintError'){
            console.log(err)
            return message.reply('Personagem já existe!')
        }else{
            console.log(err);
            return message.reply('Erro ao gravar personagem')
        }
    })
}

async function lista_meus_personagens(username,message){
    console.log(username)
    const personagens = await tabelas.Personagem.findAll({where:{username:username}})
    var lista_nomes = new Array();
    for(var i=0;i<personagens.length;i++){
        lista_nomes.push(personagens[i].dataValues.nome)
    }

    const embed = new MessageEmbed()
    embed.setTitle("Personagens de "+username).setDescription(lista_nomes).setColor('#DAF7A6')
    message.reply(embed)
}

async function remover_personagem(username,message){
    const rmPersonagem = await tabelas.Personagem
}

module.exports = {
    insere_personagem:insere_personagem,
    lista_meus_personagens:lista_meus_personagens,
    remover_personagem:remover_personagem
};






