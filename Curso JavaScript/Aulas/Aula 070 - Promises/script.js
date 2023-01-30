function numAleatorio(min, max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(msg)
        }, tempo)

        if(typeof msg !== 'string') reject('BAD VALUE')
    })
}

esperar('Frase 1', numAleatorio(1, 3))
    .then(resposta =>{
        console.log(resposta)
        return esperar(21, numAleatorio(1, 3))
    })
    .then(resposta =>{
        console.log(resposta)
        return esperar('Frase 3', numAleatorio(1, 3))
    })
    .then(resposta =>{
        console.log(resposta)
    })
    .catch(e =>{
        console.log('ERRO', e)
    })