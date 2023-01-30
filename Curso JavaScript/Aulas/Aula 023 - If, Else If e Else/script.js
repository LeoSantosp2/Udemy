/* 
0 - 11 = Bom Dia!
12 - 17 = Boa Tarde!
18 - 23 = Boa Noite!

const hora = 35

if(hora >= 0 && hora <= 11){
    console.log('Bom Dia!')
}
else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde!')
}
else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite!')
}
else{
    console.log('Hora Errada!')
}
*/

const num = 10

if(num >= 0 && num <= 5){
    console.log('O número esta entre 0 e 5')
}
else if(num >= 6 && num <= 8){
    console.log('O número esta entre 6 e 8')
}
else if(num >= 9 && num <= 11){
    console.log('O número esta entre 9 e 11')
}
else{
    console.log('O número não esta entre 0 e 11')
}