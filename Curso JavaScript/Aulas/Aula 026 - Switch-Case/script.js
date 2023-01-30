/*
if (diaSemana === 0) {
    semana = 'Domingo'
}
else if(diaSemana === 1){
    semana = 'Segunda'
}
else if(diaSemana === 2){
    semana = 'Terça'
}
else if(diaSemana === 3){
    semana = 'Quarta'
}
else if(diaSemana === 4){
    semana = 'Quinta'
}
else if(diaSemana === 5){
    semana = 'Sexta'
}
else if(diaSemana === 6){
    semana = 'Sábado'
}
else{
    semana = 'Dia da semana inválido!'
}
*/


const data = new Date()

let diaSemana = data.getDay()
let semana

switch(diaSemana){
    case 0:
        semana = 'Domingo'
        break
    case 1:
        semana = 'Segunda'
        break
    case 2:
        semana = 'Terça'
        break
    case 3:
        semana = 'Quarta'
        break
    case 4:
        semana = 'Quinta'
        break
    case 5:
        semana = 'Sexta'
        break
    case 6:
        semana = 'Sábado'
        break
    default:
        semana = 'Dia da semana inválido!'
}

console.log(semana)