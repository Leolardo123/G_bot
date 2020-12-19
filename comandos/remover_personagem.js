const funcoes_bd = require('../DB_functions')
const config = require('../config.json')
const mk_per_cmd = config.prefix+"remover <nome>"

module.exports = {
    name: "remover_personagem",
    description: "remove um personagem do usuario",
    execute(message,detalhes){
        if(detalhes.argumentos!=null){
            var nome= detalhes.argumentos.slice("remover ");
            funcoes_bd.remover_personagem(detalhes.argumentos,detalhes.autor,message)
        }else{
            message.channel.send('Para remover jogador digite: \n'+mk_per_cmd)
        }
    },
}