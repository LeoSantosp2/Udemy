/*
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
*/


/*
// === Promise ===//

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

    fetch(href)
    .then(response =>{
        if(response.status !== 200) throw new Error('ERRO 404')
        return response.text()
    })
    .then(html => carregarResultado(html))
    .catch(e => console.log(e))
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
*/

// === Promise with async/await === //

document.addEventListener('click', e =>{
    const event = e.target
    const tag = event.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(event)
    }
})

async function carregaPagina(event){
    try{
        const href = event.getAttribute('href')
        const response = await fetch(href)

        if(response.status !== 200) throw new Error('ERRO 404')

        const html = await response.text()
        carregarResultado(html)
    }
    catch(e){
        console.log(e)
    }
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}