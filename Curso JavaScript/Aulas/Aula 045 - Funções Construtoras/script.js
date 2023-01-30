function Pessoa(nome, sobrenome){
    const id = 123456
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Leonardo', 'Santos')
const p2 = new Pessoa('Valdivia', 'Santos')

console.log(p1.nome)
console.log(p2.nome)