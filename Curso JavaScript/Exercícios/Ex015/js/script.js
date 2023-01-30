class Formulario{
    constructor(){
        this.formulario = document.getElementById('form')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.validarCampos()
        const senhasValidas = this.validarSenhas()

        if(camposValidos && senhasValidas){
            alert('Formulário enviado.')
            this.formulario.submit()
        }
    }

    validarSenhas(){
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            valid = false

            this.criarErro(senha, 'Campos senha e Repetir senha, precisam ser iguais.')

            this.criarErro(repetirSenha, 'Campos senha e Repetir senha, precisam ser iguais.')
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false

            this.criarErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.')
        }

        return valid
    }

    validarCampos(){
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.msg-error')){
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML

            if(!campo.value){
                this.criarErro(campo, `O campo "${label}" não pode estar vazio.`)

                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validarCpf(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validarUsuario(campo)) valid = false
            }
        }

        return valid 
    }

    validarUsuario(campo){
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12){
            this.criarErro(campo, 'usuário precisa ter entre 3 e 12 caracteres.')

            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criarErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.')

            valid  = false
        }

        return valid
    }

    validarCpf(campo){
        const cpf = new ValidarCpf(campo.value)
        let valid = true

        if(!cpf.valida()){
            this.criarErro(campo, 'CPF Inválido')

            valid = false
        }

        return valid
    }

    criarErro(campo, msg){
        const p = document.createElement('p')
        p.innerHTML = msg
        p.classList.add('msg-error')
        campo.insertAdjacentElement('afterend', p)
    }
}

const form = new Formulario()