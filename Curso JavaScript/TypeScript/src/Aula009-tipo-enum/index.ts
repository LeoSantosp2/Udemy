enum Cores {
    VERMELHO = 10,
    AZUL,
    AMARELO,
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
}

//console.log(Cores);
//console.log(Cores.VERMELHO);
//console.log(Cores[0]);

export function escolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
