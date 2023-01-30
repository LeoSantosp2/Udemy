let num = Number(window.prompt('Digite um Número'))

let res = window.document.getElementById('resultado')

res.innerHTML = `<h1>Seu Número é ${num}</h1>

                <p>Raiz Quadrada: <strong>${Math.sqrt(num)}</strong></p>
                <p>${num} é inteiro: <strong>${Number.isInteger(num)}</strong></p>
                <p>É NaN: <strong>${Number.isNaN(num)}</strong></p>
                <p>Arredondando para baixo: <strong>${Math.floor(num)}</strong></p>
                <p>Arredondado para cima: <strong>${Math.ceil(num)}</strong></p>
                <p>Com duas casas decimais: <strong>${num.toFixed(2)}</strong></p>`
