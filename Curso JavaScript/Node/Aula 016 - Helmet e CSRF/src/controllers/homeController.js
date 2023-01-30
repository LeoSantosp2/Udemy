exports.paginaInicial = (req, res) =>{
    console.log(req.session.usuario)
    res.render('index', {
        titulo: 'Este é o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
    return
}

exports.postar = (req, res) =>{
    res.send(req.body)
}