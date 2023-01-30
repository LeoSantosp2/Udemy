/*
let i = 0

while(i < 3){
    console.log(`Linha ${i}`)
    i++
}

function random(min, max){
    let r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const mi = 1
const ma = 50
let i = random(mi, ma)

while(i !== 10){
    i = random(mi, ma)
    console.log(i)
}
*/

function random(min, max){
    let r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const mi = 1
const ma = 50
let rand = 10

do{
    rand = random(mi, ma)
    console.log(rand)
}while(rand !== 10)