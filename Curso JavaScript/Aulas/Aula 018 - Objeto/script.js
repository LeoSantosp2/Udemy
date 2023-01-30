const pessoal = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando...`)
        console.log(`Minha idade atual é ${this.idade} anos.`)
    },

    incrementaIdade(){
        this.idade++
    }
}

pessoal.fala()
pessoal.incrementaIdade()
pessoal.fala()