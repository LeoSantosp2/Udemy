const data = new Date()

let cont = window.document.querySelector('.container')

let diaSemana = data.getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let mim = data.getMinutes()

function semana(ds){
    let sem

    switch(ds){
        case 0:
            sem = 'Domingo'
            return sem
        case 1:
            sem = 'Segunda-feira'
            return sem
        case 2:
            sem = 'Terça-feira'
            return sem
        case 3:
            sem = 'Quarta-feira'
            return sem
        case 4:
            sem = 'Quinta-feira'
            return sem
        case 5:
            sem = 'Sexta-feira'
            return sem
        case 6:
            sem = 'Sábado'
            return sem
        default:
            sem = 'Dia da semana Inválido!'
            return sem
    }
}

function mesAtual(ma){
    let mesA

    switch(ma){
        case 0:
            mesA = 'Janeiro'
            return mesA
        case 1:
            mesA = 'Fevereiro'
            return mesA
        case 2:
            mesA = 'Março'
            return mesA
        case 3:
            mesA = 'Abriu'
            return mesA
        case 4:
            mesA = 'Maio'
            return mesA
        case 5:
            mesA = 'Junho'
            return mesA
        case 6:
            mesA = 'Julho'
            return mesA
        case 7:
            mesA = 'Agosto'
            return mesA
        case 8:
            mesA = 'Setembro'
            return mesA
        case 9:
            mesA = 'Outubro'
            return mesA
        case 10:
            mesA = 'Novembro'
            return mesA
        case 11:
            mesA = 'Dezembro'
            return mesA
    }
}

function zero(z){
    return z >= 10 ? z : `0${z}`
}
const dayWeek = semana(diaSemana)
const mouth = mesAtual(mes)
const hour = zero(hora)
const minute = zero(mim)

cont.innerHTML = `<h1>${dayWeek}, ${dia} de ${mouth} de ${ano} ${hour}:${minute}</h1>`