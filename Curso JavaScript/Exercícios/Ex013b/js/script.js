function Calculadora(){
    this.display = document.querySelector('.display')

    this.iniciar = () =>{
        this.cliqueBotoes()
    }

    this.apagar = () =>{
        this.display.value = ''
    }

    this.apagaUm = () =>{
        this.display.value = this.display.value.slice(0, -1)
    }

    this.calcular = () =>{
        let conta = this.display.value

        try{
            conta = eval(conta)

            if(!conta){
                alert('Conta Inválida')
                return
            }

            this.display.value = String(conta)
        } catch(e){
            alert('Conta Inválida')
                return
        }
    }

    this.pressioneEnter = addEventListener('keyup', e =>{
        if(e.keyCode === 13){
            this.calcular()
        }
    })

    this.cliqueBotoes = () =>{
        document.addEventListener('click', e =>{
            const element = e.target

            if(element.classList.contains('btn')){
                this.tela(element.innerText)
            }

            if(element.classList.contains('btn-clear')){
                this.apagar()
            }

            if(element.classList.contains('btn-del')){
                this.apagaUm()
            }

            if(element.classList.contains('btn-eq')){
                this.calcular()
            }
        })
    }

    this.tela = valor =>{
        this.display.value += valor
    }
}

const calc = new Calculadora()
calc.iniciar()