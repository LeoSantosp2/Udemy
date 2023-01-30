function criarCalculadora(){
    return {
        display: document.querySelector('.display'),

        iniciar(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizarConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(conta)
            } catch(e){
                alert('Conta inválida')
                return
            }
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) =>{
                if(e.keyCode === 13){
                    this.realizarConta()
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) =>{
                const element = e.target

                if(element.classList.contains('btn')){
                    this.tela(element.innerText)
                }

                if(element.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(element.classList.contains('btn-del')){
                    this.apagarUm()
                }

                if(element.classList.contains('btn-eq')){
                    this.realizarConta()
                }
            })
        },

        tela(valor){
            this.display.value += valor
        }
    }
}

const calculadora = criarCalculadora()
calculadora.iniciar()