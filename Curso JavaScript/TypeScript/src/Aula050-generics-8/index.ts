// Record
const objeto1: Record<string, string | number> = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 22,
};

console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaRequired>;

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 22,
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//

type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
    sobrenome: string;
};

type AccountApi = Pick<
    AccountMongo,
    Exclude<keyof AccountMongo, '_id'> & { id: string }
>;

const accountMongo: AccountMongo = {
    _id: 'vnrivnprionvori21265',
    nome: 'Leonardo',
    idade: 22,
    sobrenome: 'Santos',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);

console.log(accountApi);

// Module mode
export default 1;
