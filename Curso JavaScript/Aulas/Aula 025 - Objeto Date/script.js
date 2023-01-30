/*
const data = new Date()

console.log(data.toString())
*/

/*
function zero(num){
    return num >= 10 ? num : `0${num}`
}

function data(dt){
    const dia = zero(dt.getDate())
    const mes = zero(dt.getMonth() + 1)
    const ano = zero(dt.getFullYear())
    const hora = zero(dt.getHours())
    const min = zero(dt.getMinutes())
    const sec = zero(dt.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const dta = new Date()
const dtBrasil = data(dta)
console.log(dtBrasil)
*/

const data = new Date()

function zero(num){
    return num >= 10 ? num : `0${num}`
}

const ano = data.getFullYear()
const mes = data.getMonth() + 1
const dia = data.getDate()
const hora = data.getHours()
const min = data.getMinutes()
const sec = data.getSeconds()

console.log(`${zero(dia)}/${zero(mes)}/${zero(ano)} ${zero(hora)}:${zero(min)}:${zero(sec)}`)