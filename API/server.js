const app = require('./express')();
const port = app.get('port')
const routes = require('./routes')

app.get('/',(req,res)=>{
    res.send('API está online!')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

