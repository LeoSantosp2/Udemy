const { texto } = require('./base')

const regExp1 = /João|maria/i
const found = regExp1.exec(texto)

console.log(regExp1.test(texto))
console.log(found[0])
console.log(found[1])