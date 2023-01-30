function retornaFuncao(){
    const nome = 'Leonardo'
    return function(){
        return nome
    }
}

const funcao = retornaFuncao()

console.log(funcao)