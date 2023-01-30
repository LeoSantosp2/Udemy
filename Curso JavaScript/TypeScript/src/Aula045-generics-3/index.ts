interface PessoaProtocolo<T, U> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 22,
};

const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 22,
};

const aluno3: PessoaProtocolo = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 22,
};

console.log(aluno1, aluno2, aluno3);
