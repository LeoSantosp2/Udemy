/*eslint-disable @typescript-eslint/no-namespace*/
namespace MeuNameSpace {
    export const nomeDoNameSpace = 'Leonardo';

    export class PessoaDoNameSpace {
        constructor(public nome: string) {}
    }

    const pessoaDoNameSpace = new PessoaDoNameSpace('Leonardo');

    export namespace OutroNameSpace {
        export const nomeDoNameSpace = 'Nome do outro namespace';
    }
}

const pessoaDoNameSpace = new MeuNameSpace.PessoaDoNameSpace('Leonardo');

const constDoNameSpace = 'Valor da const do namespace';
