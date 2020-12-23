const config = require("./config.json")
const fs = require('fs')
function handle_commands(msg,client){
    const command = msg.content.slice(config.prefix.length).trim().split(' ')
    const args  = new Array()
    var cmdDir =  msg.content.slice(config.prefix.length).replace(' ','/');
    try{
        for(var i=command.length-1;i>=0;i--){
            if(fs.existsSync('./comandos/'+cmdDir+'.js')){
                var cmd = cmdDir.replace('/',' ')//recupera o formato original do comando
                console.log(cmd)
                if((client.commands.get(cmd).args==false&&args.length==0)||client.commands.get(cmd).args==true){//Executa comando se não achou nenhum argumento caso comando nao possua nenhum, ou se o comando permite argumentos 
                    client.commands.get(cmd).execute(msg,args)
                    return true
                }else{
                    return false
                }
            }else{
                cmdDir = cmdDir.replace(command[i],'').slice(0,-1)
                args.push(command[i])
            }
        }
        return false
    }catch(e){
        console.log(e);
        return false
    }
}

module.exports = {
    handle_commands:handle_commands,
}