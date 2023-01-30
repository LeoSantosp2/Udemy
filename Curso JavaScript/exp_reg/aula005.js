const { texto, arquivos, html, alfabeto } = require('./base')

console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-k]+/g))
console.log(alfabeto.match(/[a-z]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)) // Negação
console.log(alfabeto.match(/\w+/g))
console.log(alfabeto.match(/\W+/g))