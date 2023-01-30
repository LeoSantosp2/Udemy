/*
const novasPessoas = {}

for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas[id] = {...pessoa}
}
*/

const pessoas = [
    {id: 3, nome: 'Leonardo'},
    {id: 2, nome: 'Valdivia'},
    {id: 1, nome: 'Rebeca'}
]

const novasPessoas = new Map()

for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)