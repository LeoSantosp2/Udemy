class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado === true){
            console.log(`${this.nome} já está ligado!`)
        }

        this.ligado = true
    }

    desligar(){
        if(this.ligado === false){
            console.log(`${this.nome} já esta desligado!`)
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'SE')

s1.ligar()

console.log(s1)