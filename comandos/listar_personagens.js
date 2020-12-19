const funcoes_bd = require('../DB_functions')
const config = require('../config.json')
const mk_per_cmd = config.prefix+"criar <nome>"

module.exports = {
    name:"listar_personagens",
    description:"Lista todos os personagens do usuário",
    execute:function(message,detalhes){
        funcoes_bd.lista_meus_personagens(detalhes.autor,message)
    }
}