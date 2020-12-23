const config = require('../../config.json')

module.exports = {
    name: "remove character",
    description: "remove's the selected character from the player",
    sintaxe:config.prefix+"remove character <name>",
    args:true,//comando ultiliza argumentos (sim ou não)
    argsQtd:1,
    execute(message,detalhes){

    },
}