// IIFE - Immediately Invoked Function Expression

(function(idade, peso, altura){
    const sobrenome = 'Santos'

    function criaNome(nome){
        return nome + ' ' + sobrenome + ' ' + idade + ' ' + peso + ' ' + altura
    }

    function falaNome(){
        console.log(criaNome('Leonardo'))
    }

    falaNome()

})

(21, 54, 1.68)