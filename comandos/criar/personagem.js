const funcoes_bd = require('../../DB_functions')
const config = require('../../config.json')

module.exports = {
    name: "criar personagem",
    description: "cria um jogador para o jogo do gulag bot",
    sintaxe:"criar personagem <nome>",
    args:true,//comando ultiliza argumentos (sim ou não)
    argsQtd:1,
    execute(message,detalhes){
        if(detalhes.length>=this.argsQtd){
            var nome = detalhes[0];
            funcoes_bd.insere_personagem(nome,message)
        }else{
            message.channel.send('Algum argumento está faltando, comando correto\n'+this.sintaxe)
        }
    },
}