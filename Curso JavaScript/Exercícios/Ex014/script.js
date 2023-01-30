// 705.484.450-52 OU 070.987.720-03

function ValidarCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidarCpf.prototype.validar = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false
    
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.digitoCpf(cpfParcial)
    const digito2 = this.digitoCpf(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2

    return novoCpf === this.cpfLimpo
}

ValidarCpf.prototype.digitoCpf = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)

    let regrecivo = cpfArray.length + 1

    const total = cpfArray.reduce((acumulador, valor) =>{
        acumulador += (regrecivo * Number(valor))
        regrecivo--
        return acumulador
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidarCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidarCpf('070.987.720-03')

if(cpf.validar()){
    console.log('CPF Válido!')
}
else{
    console.log('CPF Inválido!')
}