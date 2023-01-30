let form = window.document.querySelector('.container')

const lista = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'section', texto: 'Frase 03'},
    {tag: 'footer', texto: 'Frase 04'}
]

for(let i = 0; i < lista.length; i++){
    const criarTag = window.document.createElement(lista[i].tag)
    
    criarTag.innerHTML = lista[i].texto

    form.appendChild(criarTag)
}