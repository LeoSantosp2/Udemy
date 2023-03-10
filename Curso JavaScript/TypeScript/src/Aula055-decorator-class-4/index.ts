interface Contructor {
    new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
    // Closure
    return function <T extends Contructor>(target: T) {
        console.log('Sou um decorador e recebi', target);

        return class extends target {
            cor: string;
            nome: string;

            constructor(...args: any[]) {
                super(...args);

                this.nome = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);
            }

            inverte(valor: string): string {
                return (
                    valor.split('').reverse().join('') +
                    ' ' +
                    param1 +
                    ' ' +
                    param2
                );
            }
        };
    };
}

function outroDecorador(param1: string) {
    return function (target: Contructor) {
        console.log('Sou o outro decorador ' + param1);
        return target;
    };
}

@outroDecorador('O parâmetro do outro decorador') // 2
@inverteNomeECor('Valor1', 'Valor2') // 1
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log('Sou a class');
    }
}

const animal = new Animal('Leonardo', 'roxo');

console.log(animal);
