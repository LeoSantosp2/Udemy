module.exports = (req, res, next) =>{
    console.log()
    console.log('Passei no Middleware Global')
    console.log()
    next()
}