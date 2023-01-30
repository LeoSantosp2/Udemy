/*
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numMaiorDez = num.filter((value, index) =>{
    console.log(value, index)
    return value > 10
})

console.log(numMaiorDez)
*/

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Valdivia', idade: 52},
    {nome: 'Leonardo', idade: 21},
    {nome: 'Luis', idade: 25},
    {nome: 'Rebeca', idade: 20},
    {nome: 'Sophia', idade: 12},
    {nome: 'João', idade: 45}
]

const nomes = pessoas.filter(nm => nm.nome.length > 5)
const idades = pessoas.filter(id => id.idade > 50)
const nomeA = pessoas.filter(a => a.nome.endsWith('a'))

console.log(nomes)
console.log(idades)
console.log(nomeA)