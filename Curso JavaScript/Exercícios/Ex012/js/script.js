const input = document.getElementById('tarefa')
const botao = document.getElementById('btn-tarefa')
const lista = document.getElementById('lista-tarefa')

/*Função para criar o LI*/
function criarLi(){
    const li = document.createElement('li')
    return li
}

/*Função para criar o botão de Apagar*/
function criarBotao(){
    const botao = document.createElement('button')
    botao.classList.add('apagar')
    return botao
}

/*Função para limpar o input*/
function limparInput(){
    input.value = ''
    input.focus()
}

/*Função para adicionar texto no LI*/
function texto(text){
    const li = criarLi()
    const btn = criarBotao()
    li.innerHTML = text
    li.innerHTML += ' '
    btn.innerHTML = 'Apagar'
    lista.appendChild(li)
    li.appendChild(btn)
    limparInput()
    salvarLista()
}

/*Função para apagar LI*/
document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove()
        salvarLista()
    }
})

/*Dar uma função para o botão ENTER do teclado*/
input.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!input.value) return
        texto(input.value)
    }
    
})

/*Adicionando função para o botão*/
botao.addEventListener('click', function(){
    if(!input.value) return
    texto(input.value)
})

/*Salvar a lista criada*/
function salvarLista(){
    const listasLi = lista.querySelectorAll('li')
    const listaArray = []

    for(let list of listasLi){
        let listaTexto = list.innerText
        listaTexto = listaTexto.replace('Apagar', '').trim()
        listaArray.push(listaTexto)
    }

    const listaJSON = JSON.stringify(listaArray)
    localStorage.setItem('lista', listaJSON)
}

function addListasSalvas(){
    const listas = localStorage.getItem('lista')
    const listaLi = JSON.parse(listas)

    for(let l of listaLi){
        texto(l)
    }
}

addListasSalvas()