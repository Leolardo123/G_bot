const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')

module.exports = {
    name:"musica tocar",
    description:"toca música",
    sintaxe:config.prefix+"musica tocar <url ou nome>",
    execute:function(message,argumentos){
    }
}