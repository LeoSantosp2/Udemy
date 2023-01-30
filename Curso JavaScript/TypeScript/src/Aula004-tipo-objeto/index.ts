const objetoA: {
    //readonly chaveA: string
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
