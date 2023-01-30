exports.paginaInicial = (req, res) =>{
    res.send(`
        <form action="/" method="post">

            Nome: <input type="text" name="nome">
            <button>Enviar</button>

        </form>
    `)
}

exports.postar = (req, res) =>{
    res.send('Formulário enviado com sucesso!')
}