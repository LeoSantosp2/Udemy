exports.paginaInicial = (req, res) =>{
    res.render('index')
}

exports.postar = (req, res) =>{
    res.send('Formulário enviado com sucesso!')
}