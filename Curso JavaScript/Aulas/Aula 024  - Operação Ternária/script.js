const pontuacaoUser = 1000

if(pontuacaoUser >= 1000){
    console.log('Usuário Vip!')
}
else{
    console.log('Usuário Normal!')
}

const nivelUser = pontuacaoUser >= 1000 ? 'Usuário Vip!' : 'Usuário Normal!'
console.log(nivelUser)