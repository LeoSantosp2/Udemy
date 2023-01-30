function enviar(){
    const form = window.document.querySelector('.form')
    const res = window.document.getElementById('resultado')

    const pessoas = []

    form.addEventListener('submit', envio)

    function envio(evento){
        evento.preventDefault()

        const nome = window.document.getElementById('nome')
        const sobrenome = window.document.getElementById('sobrenome')
        const peso = window.document.getElementById('peso')
        const altura = window.document.getElementById('altura')

        const obj = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(obj)

        console.log(pessoas)

        res.innerHTML += `<p>${obj.nome} ${obj.sobrenome} ${obj.peso} ${obj.altura}</p>`
    }
}

enviar()