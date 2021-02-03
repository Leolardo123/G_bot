const app = require('./express')();
const port = app.get('port')
const routes = require('./routes/routes').routes

app.use('/',routes)

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

