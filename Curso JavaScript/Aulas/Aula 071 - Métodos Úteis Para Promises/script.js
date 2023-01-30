// Promise.all - Promise.race - Promise.resolve - Promise.reject

/*
// Promise.all
const promises = ['Primeiro Valor', esperar('Promise 1', 3000), esperar('Promise 2', 3000), esperar('Promise 3', 3000)]

Promise.all(promises)
    .then(valor =>{
        console.log(valor)
    })
    .catch(erro =>{
        console.log(erro)
    })
*/

/*
// Promise.race
const promises = ['Primeiro Valor', esperar('Promise 1', rand(1, 5)), esperar('Promise 2', rand(1, 5)), esperar('Promise 3', rand(1, 5))]

Promise.race(promises)
    .then(valor =>{
        console.log(valor)
    })
    .catch(erro =>{
        console.log(erro)
    })
*/

/*
// Promise.resove
function baixarPagina(){
    const emCache = true

    if(emCache){
        return Promise.resolve('Página em cache')
    }
    else{
        return esperar('Baixei a Página', rand(1, 5))
    }
}

baixarPagina()
    .then(v =>{
        console.log(v)
    })
    .catch(e =>{
        console.log('Erro ao carregar a página!')
    })
*/

/*
// Promise.reject
function baixarPagina(){
    const emCache = true

    if(emCache){
        return Promise.reject('Página em cache')
    }
    else{
        return esperar('Baixei a Página', rand(1, 5))
    }
}

baixarPagina()
    .then(v =>{
        console.log(v)
    })
    .catch(e =>{
        console.log('Erro ao carregar a página!')
    })
*/

function rand(min, max){
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

// Promise.reject
function baixarPagina(){
    const emCache = true

    if(emCache){
        return Promise.reject('Página em cache')
    }
    else{
        return esperar('Baixei a Página', rand(1, 5))
    }
}

baixarPagina()
    .then(v =>{
        console.log(v)
    })
    .catch(e =>{
        console.log('Erro ao carregar a página!')
    })