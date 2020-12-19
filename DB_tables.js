const { Message } = require('discord.js');
const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: './Database/database.sqlite',
});

const Personagem = sequelize.define('personagem',{
    nome:{
        type:Sequelize.STRING,
        unique: true,
    },
    descrição: Sequelize.TEXT,
    username: Sequelize.TEXT,
})

function load_config(){
    Personagem.sync();
}

module.exports = {
    Personagem:Personagem,
    load_config:load_config
}