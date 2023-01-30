// 705.484.450-52 OU 070.987.720-03

export default class ValidarCpf{
    constructor(cpfValido){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfValido.replace(/\D+/g, '')
        })
    }

    éSequência(){
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
    }

    gerarNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidarCpf.gerarDigito(cpfSemDigito)
        const digito2 = ValidarCpf.gerarDigito(cpfSemDigito + digito1)
        this.novoCpf = cpfSemDigito + digito1 + digito2
    }

    static gerarDigito(cpfSemDigito){
        let total = 0
        let reverso = cpfSemDigito.length + 1

        for(let stringNum of cpfSemDigito){
            total += reverso * Number(stringNum)
            reverso--
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    valida(){
        if(! this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.éSequência()) return false
        this.gerarNovoCpf()

        return this.novoCpf === this.cpfLimpo
    }
}

const cpf = new ValidarCpf('070.987.720-03')

if(cpf.valida()){
    console.log('CPF Válido!')
}
else{
    console.log('CPF Inválido!')
}

console.log('Cheguei Aqui!!')