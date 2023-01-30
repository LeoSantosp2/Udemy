const falar = {
    falar(){
        console.log(`${this.nome} está falando...`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo...`)
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo...`)
    }
}

const PessoaPrototype = Object.assign({}, falar, comer, beber) // Ou {...falar, ...comer, ...beber}

function criarPessoa(nome, sobrenome){
    return Object.create(PessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criarPessoa('Leonardo', 'Santos')

console.log(p1)