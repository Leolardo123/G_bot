const config = require('../../config.json')

module.exports = {
    name:"music next",
    description:"skip's music",
    sintaxe:config.prefix+"music next",
    args:false,//comando ultiliza argumentos (sim ou não)
    execute:function(message,detalhes){
    }
}