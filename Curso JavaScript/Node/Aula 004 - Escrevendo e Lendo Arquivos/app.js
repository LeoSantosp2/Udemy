const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

/*
const pessoas = [
    {nome: 'Leonardo'},
    {nome: 'Valdivia'},
    {nome: 'João'},
    {nome: 'Rebeca'}
]

const json = JSON.stringify(pessoas, '', 4)
*/

async function lerArquivo(caminho){
    const dados = await ler(caminho)
    mostrarDados(dados)
}

function mostrarDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(valor => console.log(valor.nome))
}

lerArquivo(caminhoArquivo)