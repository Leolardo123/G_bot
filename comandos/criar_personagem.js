const funcoes_bd = require('../DB_functions')
const config = require('../config.json')
const mk_per_cmd = config.prefix+"criar <nome>"

module.exports = {
    name: "criar_personagem",
    description: "cria um jogador para o jogo do gulag bot",
    execute(message,detalhes){
        if(detalhes.argumentos!=null){
            var nome= detalhes.argumentos.slice("criar ");
            funcoes_bd.insere_personagem(detalhes.argumentos,detalhes.autor,message)
        }else{
            message.channel.send('Para criar jogador digite: \n'+mk_per_cmd)
        }
    },
}