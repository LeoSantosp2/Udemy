function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const p1 = new Pessoa('Leonardo', 'Santos')
const p2 = new Pessoa('Valdivia', 'Santos')

console.dir(p1)
console.dir(p2)