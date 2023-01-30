class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    //Instance Method
    aumentarVolume(){
        this.volume += 2
    }

    diminurVolume(){
        this.volume -= 2
    }

    // Static Method
    static soma(x ,y){
        return x + y
    }
}

const controle1 = new ControleRemoto('LG')

console.log(ControleRemoto.soma(5, 5))

console.log(controle1)