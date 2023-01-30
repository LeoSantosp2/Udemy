exports.paginaInicial = (req, res) =>{
    console.log(req.session.usuario)
    res.render('index')
    return
}

exports.postar = (req, res) =>{
    res.send(req.body)
}