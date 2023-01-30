/*
function funcao(){
    console.log('Hello World!')
    console.log(arguments[0])
}

funcao('Olá Mundo!')


function parametros(a, b, c){
    console.log(a, b, c)
}

parametros(1, 2, 3)

function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}

funcao(['Leonardo', 'Santos', 21])
*/


function conta(operador, acumulador, ...numeros){
    for(num of numeros){
       if(operador === '+') acumulador += num
       if(operador === '-') acumulador -= num
       if(operador === '*') acumulador *= num
       if(operador === '/') acumulador /= num
    }

    console.log(acumulador)
}

conta('/', 1, 20, 30, 40, 50)