/*
// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = num.reduce((acumulador, valor) =>{
    acumulador += valor
    return acumulador
})

console.log(total)
*/

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Valdivia', idade: 52},
    {nome: 'Leonardo', idade: 21},
    {nome: 'Luis', idade: 25},
    {nome: 'Rebeca', idade: 20},
    {nome: 'Sophia', idade: 12},
    {nome: 'João', idade: 45}
]

const maisVelho = pessoas.reduce((acumulador, valor) =>{
    return acumulador.idade > valor.idade ? acumulador : valor
})

console.log(maisVelho)