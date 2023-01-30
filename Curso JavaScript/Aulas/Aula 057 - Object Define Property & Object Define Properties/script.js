/*
//Define Property
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a Chave
        value: estoque, // Valor
        writable: false, // Pode Alterar
        configurable: false // Configurável
    })
}

const prod1 = new Produto('Camiseta', 20, 3)

console.log(prod1)
*/

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    })


    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

const prod1 = new Produto('Camisa', 20, 3)

console.log(prod1)