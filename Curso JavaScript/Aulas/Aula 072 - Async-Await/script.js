function rand(min = 0, max = 3){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(msg)
        }, tempo)

        if(typeof msg !== 'string'){
            reject('ERRO')
            return
        }
    })
}

/*
esperar('Fase 1', rand())
    .then(valor =>{
        console.log(valor)
        return esperar('Fase 2', rand())
    })
    .then(valor =>{
        console.log(valor)
        return esperar('Fase 3', rand())
    })
    .then(valor =>{
        console.log(valor)
    })
    .catch(erro => console.log(erro))
*/

async function executar(){
    try{
        const fase1 = await esperar('Fase 1', rand())
        console.log(fase1)

        const fase2 = await esperar('Fase 2', rand())
        console.log(fase2)

        const fase3 = await esperar('Fase 3', rand())
        console.log(fase3)
    } 
    catch(e){
        console.log(e)
    }
}

executar()