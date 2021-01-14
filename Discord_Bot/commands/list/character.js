const personagens = require('../../models/personagem')
const config = require('../../config.json')

module.exports = {
    name:"listar personagens",
    description:"Lista todos os personagens do usuário",
    sintax:"listar personagens",
    args:false,//comando ultiliza argumentos (sim ou não)
    execute:function(message,detalhes){
        message.reply("Teste")
    }
}