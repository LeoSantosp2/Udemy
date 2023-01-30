const rand = (max, min) => Math.floor(Math.random() * (max - min) + min)

const simbolos = '.,;:^~[]{}()-_+-*/<>?°&%$#@!|='

const gerarMaiuscula = () => String.fromCharCode(rand(65, 91))
const gerarMinuscula = () => String.fromCharCode(rand(97, 123))
const gerarNumero = () => String.fromCharCode(rand(48, 57))
const gerarSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function gerarSenha(qtd, maiuscula, minuscula, numero, simbolo){
    const senhaArray = []
    qtd = Number(qtd)
    
    for(let i = 0; i < qtd; i++){
        maiuscula && senhaArray.push(gerarMaiuscula())
        minuscula && senhaArray.push(gerarMinuscula())
        numero && senhaArray.push(gerarNumero())
        simbolo && senhaArray.push(gerarSimbolo())
    }

    return senhaArray.join('').slice(0, qtd)
}