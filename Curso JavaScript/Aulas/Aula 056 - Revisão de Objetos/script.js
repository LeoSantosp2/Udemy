/*
const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos'
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])


const pessoa1 = new Object()
pessoa1.nome = 'Leonardo'
pessoa1.sobrenome = 'Santos'
pessoa1.idade = 21
pessoa1.falarNome = function(){
    return (`${this.nome} está falando...`)
}
pessoa1.dataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.dataNascimento())


// Factory Function
function pessoas(nome, sobrenome){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${nome} ${sobrenome}`
        }
    }
}

const p1 = pessoas('Leonardo', 'Santos')
console.log(p1.nomeCompleto)
*/

// Constructor Function
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
}

const p1 = new Pessoa('Leonardo', 'Santos')
const p2 = new Pessoa('Valdivia', 'Santos')

console.log(p1)
console.log(p2)