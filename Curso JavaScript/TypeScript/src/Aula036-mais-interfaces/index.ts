// Declaration merging
interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: string[];
}

interface Pessoa {
    idade?: number;
}

export const pessoa: Pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    enderecos: ['AV. Brasil'],
    idade: 22,
};

console.log(pessoa);
