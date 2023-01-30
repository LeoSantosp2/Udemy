// Retorne a soma do dobro de todos os pares
// -> Filtrar Pares
// -> Dobrar os Valores
// -> Reduzir (somar tudo)

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const res = num.filter(valor =>{
    return valor % 2 === 0
}).map(valor =>{
    return valor * 2
}).reduce((acumulador , valor) =>{
    return acumulador += valor
})

console.log(res)