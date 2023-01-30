exports.paginaInicial = (req, res) =>{
    res.render('index')
}

exports.postar = (req, res) =>{
    res.send(req.body)
}