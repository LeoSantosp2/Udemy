const nome = 'Leonardo'
const sobrenome = 'Santos'
const idade = 21
const peso = 54
const altura = 1.68

let imc = peso / (altura * altura)
let anoNasc = 2022 - idade - 1

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg.`)
console.log(`Tem ${altura} de altura e seu imc é ${imc}. Nasceu em ${anoNasc}.`)