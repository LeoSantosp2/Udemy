/*
// New Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // ___proto___: Object.prototype
}

const objB = {
    chaveB: 'B'
    // ___proto___: objA
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objB)
console.log(objC)
*/

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(desc){
    this.preco = this.preco - (this.preco * desc) / 100
}

const p1 = new Produto('Camiseta', 50)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

const p3 = Object.create(Produto.prototype, {
    preco: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 30
    }
})

Object.setPrototypeOf(p2, Produto.prototype)

p1.desconto(25)
p2.desconto(10)
p3.desconto(5)

console.log(p1)
console.log(p2)
console.log(p3)