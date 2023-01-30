function calculo(){
    const form = window.document.getElementById('form')
    let peso = window.document.getElementById('input-01')
    let altura = window.document.getElementById('input-02')
    let res = window.document.getElementById('resultado')

    form.addEventListener('submit', calcular)

    function calcular(evento){
        evento.preventDefault()

        let imc = peso.value / (altura.value * altura.value)

        if(imc < 18.5){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Abaixo do Peso!</p>`
            res.style.backgroundColor = `rgba(248, 157, 157, 0.623)`
        }
        else if(imc >= 18.5 && imc <= 24.9){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Peso Normal!</p>`
            res.style.backgroundColor = `rgba(148, 235, 148, 0.562)`
        }
        else if(imc >= 25 && imc <= 29.9){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Sobrepeso!</p>`
            res.style.backgroundColor = `rgba(243, 243, 136, 0.658)`
        }
        else if(imc >= 30 && imc <= 34.9){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Obesidade Grau 1!</p>`
            res.style.backgroundColor = `rgba(248, 157, 157, 0.623)`
        }
        else if(imc >= 35 && imc <= 39.9){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Obesidade Grau 2!</p>`
            res.style.backgroundColor = `rgba(248, 157, 157, 0.623)`
        }
        else{
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Obesidade Grau 3!</p>`
            res.style.backgroundColor = `rgba(248, 157, 157, 0.623)`
        }
    }
}

calculo()