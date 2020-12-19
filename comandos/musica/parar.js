const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')
const mk_per_cmd = config.prefix+"musica parar"

module.exports = {
    name:"musica parar",
    description:"para a musica que está tocando",
    sintaxe:config.prefix+"musica parar",
    execute:function(message,detalhes){
    }
}