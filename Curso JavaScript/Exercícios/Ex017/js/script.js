/*
// === Fetch API === //

fetch('/json/pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaPagina(json))

function carregaPagina(json){
    const table = document.createElement('table')

    for(let pessoa of json){
        const tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerHTML = pessoa.nome
        tr.appendChild(td)
        
        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')

    resultado.appendChild(table)
*/

// === Axios === //

axios('/json/pessoas.json')
    .then(resposta => carregaPagina(resposta.data))
    

function carregaPagina(json){
    const table = document.createElement('table')

    for(let pessoa of json){
        const tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerHTML = pessoa.nome
        tr.appendChild(td)
        
        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')

    resultado.appendChild(table)
}