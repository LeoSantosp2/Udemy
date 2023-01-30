/*
function criaPessoa(nome, sobrenome){
    return{nome, sobrenome}
}

const p1 = criaPessoa('Leonardo', 'Santos')
const p2 = {nome: 'Valdivia', sobrenome: 'Santos'}

console.log(p1)
console.log(p2)


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('Mundo!')
console.log(resto)
*/

function criaMultiplicador(m){
    return function(n){
        return n * m
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))