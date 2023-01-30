import './css/style.css'
import GerarCPF from './modules/GerarCPF'

(function(){
    const gerar = new GerarCPF()
    const cpfGerado = document.querySelector('.resultado')
    cpfGerado.innerHTML = gerar.gerarCpf()
})()