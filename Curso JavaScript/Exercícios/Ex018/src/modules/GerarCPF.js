import ValidarCPF from './ValidarCPF'

export default class GerarCPF{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatarCpf(cpf){
        return(
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    gerarCpf(){
        const cpf = this.rand()
        const digito1 = ValidarCPF.gerarDigito(cpf)
        const digito2 = ValidarCPF.gerarDigito(cpf + digito1)
        const novoCpf = cpf + digito1 + digito2
        
        return this.formatarCpf(novoCpf)
    }
}