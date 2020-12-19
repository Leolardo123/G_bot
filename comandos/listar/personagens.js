const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')

module.exports = {
    name:"listar personagens",
    description:"Lista todos os personagens do usuário",
    sintaxe:"listar personagens",
    execute:function(message,detalhes){
        funcoes_bd.lista_meus_personagens(detalhes.autor,message)
    }
}