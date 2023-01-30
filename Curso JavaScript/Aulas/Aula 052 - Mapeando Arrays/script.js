/*
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numDobro = num.map(value => value * 2)

console.log(numDobro)
*/

const pessoas = [
    {nome: 'Valdivia', idade: 52},
    {nome: 'Leonardo', idade: 21},
    {nome: 'Luis', idade: 25},
    {nome: 'Rebeca', idade: 20},
    {nome: 'Sophia', idade: 12},
    {nome: 'João', idade: 45}
]

//Para cada Elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const nomes = pessoas.map(nome => nome.nome)
const idades = pessoas.map(idade => ({idade: idade.idade}))
const ids = pessoas.map((id, index) =>{
    const newObj = {...id}
    newObj.id = index
    return newObj
})

console.log(nomes)
console.log(idades)
console.log(ids)