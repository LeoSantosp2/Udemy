type VotationOption = {
    numberOfVotes: number;
    option: string;
};

export class Votation {
    private _votationOption: VotationOption[] = [];

    constructor(public details: string) {}

    addVotationOption(votationOption: VotationOption): void {
        this._votationOption.push(votationOption);
    }

    vote(votationIndex: number): void {
        if (!this._votationOption[votationIndex]) return;
        this._votationOption[votationIndex].numberOfVotes += 1;
    }

    get votationOptions(): VotationOption[] {
        return this._votationOption;
    }
}

export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotations(): void {
        for (const votation of this.votations) {
            console.log(votation.details);

            for (const votationOption of votation.votationOptions) {
                console.log(
                    votationOption.option,
                    votationOption.numberOfVotes,
                );
            }

            console.log('###');
            console.log();
        }
    }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');

votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor favorita?');

votation2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Roxo', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Marron', numberOfVotes: 0 });

votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(1);
votation2.vote(0);
votation2.vote(4);
votation2.vote(2);

const votatioApp = new VotationApp();

votatioApp.addVotation(votation1);
votatioApp.addVotation(votation2);
votatioApp.showVotations();
