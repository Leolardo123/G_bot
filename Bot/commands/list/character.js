const config = require('../../config.json')

module.exports = {
    name:"list character",
    sintax:config.prefix+"list character",
    args:false,//comando ultiliza argumentos (sim ou não)
    execute:function(message,Args){
        message.reply("Teste")
    }
}