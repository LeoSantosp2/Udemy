import gerarSenha from './geradores'

const res = document.querySelector('.res')
const qtdChar = document.querySelector('.qtd-char')
const checkMaiu = document.querySelector('.check-maiu')
const checkMinu = document.querySelector('.check-minu')
const checkNum = document.querySelector('.check-num')
const checkSimb = document.querySelector('.check-simb')
const btn = document.querySelector('.btn')

export default () =>{
    btn.addEventListener('click', () =>{
        res.innerHTML = `<p>${gerar()}</p>`
    })
}

function gerar(){
    const senha = gerarSenha(
        qtdChar.value,
        checkMaiu.checked,
        checkMinu.checked,
        checkNum.checked,
        checkSimb.checked
    )

    return senha
}