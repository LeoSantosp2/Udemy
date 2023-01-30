function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Leonardo', 'Santos');
pessoa.exibirNome();
