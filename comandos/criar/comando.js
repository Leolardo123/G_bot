const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')
const mk_per_cmd = config.prefix+"criar cmd <nome>"

module.exports = {
    name: "criar comando",
    description: "cria os arquivos de um comando para o bot",
    sintaxe:"criar comando <nome>",
    args:true,//comando ultiliza argumentos (sim ou não)
    execute(message,detalhes){
        if(message.member.id==null)return
    },
}