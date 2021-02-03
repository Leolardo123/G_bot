const config = require('../../config.json')

module.exports = {
    name: "create test",
    sintax:config.prefix+"create test",
    args:true,//comando ultiliza argumentos (sim ou não)
    argsQtd:1,
    execute(message,Args){
        message.reply('command accepted!')
    },
}