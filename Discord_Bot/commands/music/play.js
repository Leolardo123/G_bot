const config = require('../../config.json')

module.exports = {
    name:"music play",
    description:"play's music",
    sintax:config.prefix+"music play <url or name>",
    args:true,//comando ultiliza argumentos (sim ou não)
    argsQtd:1,
    execute:function(message,argumentos){
    }
}