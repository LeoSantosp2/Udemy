/*eslint-disable @typescript-eslint/no-namespace*/
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nomeDoNameSpace = 'Leonardo';
    var PessoaDoNameSpace = /** @class */ (function () {
        function PessoaDoNameSpace(nome) {
            this.nome = nome;
        }
        return PessoaDoNameSpace;
    }());
    MeuNameSpace.PessoaDoNameSpace = PessoaDoNameSpace;
    var pessoaDoNameSpace = new PessoaDoNameSpace('Leonardo');
    var OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nomeDoNameSpace = 'Nome do outro namespace';
    })(OutroNameSpace = MeuNameSpace.OutroNameSpace || (MeuNameSpace.OutroNameSpace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
var pessoaDoNameSpace = new MeuNameSpace.PessoaDoNameSpace('Leonardo');
var constDoNameSpace = 'Valor da const do namespace';
/*eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNameSpace.nomeDoNameSpace);
console.log(constDoNameSpace);
