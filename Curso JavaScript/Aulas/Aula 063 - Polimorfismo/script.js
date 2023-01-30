function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.deposita = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo){
        console.log(`Saldo Insulficiente: R$${this.saldo.toFixed(2)}`)
        return
    }
    else{
        this.saldo -= valor
        this.verSaldo()
    }
}

Conta.prototype.verSaldo = function() {
    console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo Insuficiente: R$${this.saldo.toFixed(2)}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const cc = new ContaCorrente(1, 87457856, 0, 100)

cc.deposita(1000)
cc.sacar(1101)