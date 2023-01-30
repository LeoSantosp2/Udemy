const relogio = document.querySelector('.relogio')
let sec = 0
let tempo

function criarSegundos(segundos){
    let data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciaRelogio(){
    tempo = setInterval(function(){
        sec++
        relogio.innerHTML = criarSegundos(sec)
    }, 1000)
}

document.addEventListener('click', function(e){
    const evento = e.target

    if(evento.classList.contains('iniciar')){
        clearInterval(tempo)
        relogio.classList.remove('pausado')
        iniciaRelogio()
    }

    if(evento.classList.contains('pausar')){
        clearInterval(tempo)
        relogio.classList.add('pausado')
    }

    if(evento.classList.contains('zerar')){
        clearInterval(tempo)
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        sec = 0
    }
})