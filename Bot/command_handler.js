const config = require("./config.json")
const fs = require('fs')

function load_commands(commands,cmddir){
    fs.readdirSync(cmddir).forEach(dir=>{
        cmddir += '/'+dir.replace('.js','')
        if(!fs.existsSync(cmddir+'.js')&&fs.existsSync(cmddir)){
            console.log(cmddir)
            load_commands(commands,cmddir)
        } else if(fs.existsSync(cmddir+'.js')){
            const command = require(cmddir+'.js')
            commands.set(command.name,command)
        }
        cmddir = cmddir.replace('/'+dir.replace('.js',''),'')
    })
    
    return commands
}

function handle_commands(msg,client){
    const command = msg.content.slice(config.prefix.length).trim().split(' ')
    const args  = new Array()
    var cmdDir =  msg.content.slice(config.prefix.length).replace(' ','/');
    
    try{
        for(var i=command.length-1;i>=0;i--){
            if(fs.existsSync('./commands/'+cmdDir+'.js')){
                var cmd = cmdDir.replace('/',' ')//recupera o formato original do comando
                if((client.commands.get(cmd).args==false&&args.length==0)||(client.commands.get(cmd).args==true&&args.length>=client.commands.get(cmd).minArgs)){//Executa comando se não achou nenhum argumento caso comando nao possua nenhum, ou se o comando permite argumentos 
                    console.log(args)
                    client.commands.get(cmd).execute(msg,args)
                    return true
                }else{
                    msg.channel.send('Missing or Exceeding arguments, correct:\n'+client.commands.get(cmd).sintax)
                    return true
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

function find_command_category(msg){//finds the category of the selected command based on the directory path
    const command = msg.content.slice(config.prefix.length).trim().split(' ')
    var cmdDir =  msg.content.slice(config.prefix.length).replace(' ','/');
    for(var i=command.length-1;i>=0;i--){
        if(fs.existsSync('./commands/'+cmdDir)){
            var cmdList = '\nSimilar:'
            
            fs.readdirSync('./commands/'+cmdDir).forEach(cmd => {
                console.log('./commands/'+cmdDir+'/'+cmd)
                if(fs.existsSync('./commands/'+cmdDir+'/'+cmd)){
                    cmdList += '\n'+require('./commands/'+cmdDir+'/'+cmd).sintax
                }
            })
            console.log(cmdList)
            return cmdList
        }else{
            cmdDir = cmdDir.replace(command[i],'').slice(0,-1)
        }
    }
}

module.exports = {
    handle_commands:handle_commands,
    find_command_category:find_command_category,
    load_commands:load_commands,
}