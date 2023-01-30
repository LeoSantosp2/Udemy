const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send(`
        <form action="/" method="post">

            Nome: <input type="text" name="nome">
            <button>Enviar</button>

        </form>
    `)
})

app.get('/teste/:idUsuario?/:parametro?', (req, res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send('Oi')
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`Você enviou: ${req.body.nome}`)
})

app.listen(3000, () =>{
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})