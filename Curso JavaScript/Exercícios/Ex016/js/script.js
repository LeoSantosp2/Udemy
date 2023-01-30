/*
// === Normal === //

const request = obj =>{
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.sucess(xhr.responseText)
        }
        else{
            obj.error(xhr.responseText)
        }
    })
}

document.addEventListener('click', e =>{
    const event = e.target
    const tag = event.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(event)
    }
})

function carregaPagina(event){
    const href = event.getAttribute('href')
    
    request({
        method: 'GET',
        url: href,
        sucess(response){
            carregarResultado(response)
        },
        error(errorText){
            console.log(errorText)
        }
    })
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

// === Primise === //

const request = obj =>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }
            else{
                reject(xhr.responseText)
            }
        })
    })
}

document.addEventListener('click', e =>{
    const event = e.target
    const tag = event.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(event)
    }
})

function carregaPagina(event){
    const href = event.getAttribute('href')
    
    const objConfig = {
        method: 'GET',
        url: href
    }

    request(objConfig).then(response =>{
        carregarResultado(response)
    })
    .catch(errorText => console.log(errorText))
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}
*/

// === Promise With async and await === //

const request = obj =>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }
            else{
                reject(xhr.responseText)
            }
        })
    })
}

document.addEventListener('click', e =>{
    const event = e.target
    const tag = event.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(event)
    }
})

async function carregaPagina(event){
    const href = event.getAttribute('href')
    
    const objConfig = {
        method: 'GET',
        url: href
    }

    try{
        const response = await request(objConfig)
        carregarResultado(response)
    }catch(erro){
        console.log(erro)
    }
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}