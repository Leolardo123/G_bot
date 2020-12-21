const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')

module.exports = {
    name:"listar personagens",
    description:"Lista todos os personagens do usuário",
    sintaxe:"listar personagens",
    args:false,//comando ultiliza argumentos (sim ou não)
    execute:function(message,detalhes){
        console.log(message)
        funcoes_bd.lista_meus_personagens(message.author.id)
    }
}