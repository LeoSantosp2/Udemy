/*
const p2 = {...p1} -> const p2 = Object.assign({}, p1, {sexo: 'Feminino'})


const p1 = {
    nome: 'Leonardo',
    idade: 21
}

const p2 = Object.assign({}, p1, {sexo: 'Feminino'})

p2.nome = 'Valdivia'
p2.idade = 52

console.log(p1)
console.log(p2)


console.log(Object.getOwnPropertyDescriptor(p1, 'nome'))
*/

const p1 = {
    nome: 'Leonardo',
    idade: 21
}

console.log(Object.entries(p1))