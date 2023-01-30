// Factory Function (Função Fábrica)
function criarPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura * this.altura)
            return indice.toFixed(2)
        },
        fala(){
            return `${this.nome} ${this.sobrenome} tem ${this.altura} de altura e pesa ${this.peso}Kg. Seu IMC é de ${this.imc()}`
        }
    }
}

const p1 = criarPessoa('Leonardo', 'Santos', 1.68, 54)
const p2 = criarPessoa('Valdivia', 'Santos', 1.58, 74)

console.log(p1.fala())
console.log(p2.fala())