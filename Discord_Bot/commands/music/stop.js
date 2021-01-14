const config = require('../../config.json')

module.exports = {
    name:"music stop",
    description:"stop's music",
    sintax:config.prefix+"music stop",
    args:false,//comando ultiliza argumentos (sim ou não)
    execute:function(message,detalhes){
    }
}