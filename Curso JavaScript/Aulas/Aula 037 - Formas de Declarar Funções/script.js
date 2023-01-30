// Declaração de Função (Function hoisting)
function falaOi(){
    console.log('Oi')
}

falaOi()

// First-class objects (Objetos de primeira classe)
// Function Expression
const falaOla = function(){
    console.log('Ola')
}

falaOla()

// Arrow Function
const arrowFunction = () =>{
    console.log('Arrow Function')
}

arrowFunction()

// Função dentro de Objeto
const obj = {
    falar(){
        console.log('Estou falando...')
    }
}

obj.falar()