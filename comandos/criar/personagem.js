const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')

module.exports = {
    name: "criar personagem",
    description: "cria um jogador para o jogo do gulag bot",
    sintaxe:"criar personagem <nome>",
    execute(message,detalhes){
        if(detalhes.argumentos!=null){
            var nome= detalhes.argumentos.slice("criar ");
            funcoes_bd.insere_personagem(detalhes.argumentos,detalhes.autor,message)
        }else{
            message.channel.send('Para criar jogador digite: \n'+mk_per_cmd)
        }
    },
}