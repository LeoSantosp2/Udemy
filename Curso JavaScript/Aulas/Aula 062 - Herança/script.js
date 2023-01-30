function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quant){
    this.preco += quant
}

Produto.prototype.desconto = function(quant){
    this.preco -= quant
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const camiseta = new Camiseta('Manga Comprida', 10, 'Azul')
const produto = new Produto('Regata', 39.99)

camiseta.desconto(5

console.log(camiseta)
console.log(produto)