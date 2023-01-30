// Define Property -> Getters e Setters
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a Chave
        configurable: true, // Configurável

        get: function(){
            return estoque
        },

        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Valor Inválido')
            }
            else{
                console.log(valor)
            }
        }
    })
}

const prod1 = new Produto('Camiseta', 20, 3)
console.log(prod1)
prod1.estoque = 'Teste'
console.log(prod1.estoque)