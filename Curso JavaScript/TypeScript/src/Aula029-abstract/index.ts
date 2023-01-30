export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(
            `${this.emoji} - ${this.nome} está com ${this.vida} de vida.`,
        );
    }

    abstract bordao(): void;
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}';

    bordao(): void {
        console.log(this.emoji + ' GUERREIRA AAAAAOOOOOO AAAATAQUEEEEE!!!');
    }
}

export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';

    bordao(): void {
        console.log(this.emoji + ' MONNNNNNNNNNNNSSSTTTTEERRRRRRRRRR!!!!!');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const mostro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(mostro);
guerreira.atacar(mostro);
guerreira.atacar(mostro);

mostro.atacar(guerreira);
mostro.atacar(guerreira);
mostro.atacar(guerreira);
