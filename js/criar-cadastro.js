let form = document.querySelector('#form-novo-usuario')
let spanUserCriado = document.querySelector('.user-criado')
let formCorreto = true

form.addEventListener('submit', () => {
    event.preventDefault()
    let todosOsCampos = document.querySelectorAll('.pega-input-js')
    formCorreto = true

    for (i = 0; i < todosOsCampos.length; i++) {
        let proximoIrmaoDom = todosOsCampos[i].nextElementSibling

        if (todosOsCampos[i].value == '') {
            proximoIrmaoDom.style.display = 'block'
            spanUserCriado.style.display = 'none' 
            todosOsCampos[i].setAttribute('style', 'border-color: red')
            formCorreto = false 
        } 

        if (todosOsCampos[i].value != '') {
            todosOsCampos[i].setAttribute('style', 'border-color: black')
            proximoIrmaoDom.style.display = 'none'
            validaSenha()
        }
    }

    if (formCorreto) {
        spanUserCriado.style.display = 'block'
        propriedadesUsuario(form)
        console.log(propriedadesUsuario(form))
    }
    
})

function propriedadesUsuario(form) {
    var usuario = {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        email: form.email.value,
        senha: form.senha.value
    }

    return usuario
}

function validaSenha() {
    let senhaInput = document.querySelector('#senha')
    let senhaConfirmarInput = document.querySelector('#confirmar-senha')
  
    if (senhaInput.value.length > 0 && senhaInput.value.length < 8) {
        mensageErrorSenha(senhaInput.nextElementSibling, 'Sua senha deve ter no mínimo 8 caracteres')
        senhaInput.setAttribute('style', 'border-color: red')
    } 

    if (senhaConfirmarInput.value.length > 0 && senhaConfirmarInput.value.length < 8 ) {
        mensageErrorSenha(senhaConfirmarInput.nextElementSibling, 'Sua senha deve ter no mínimo 8 caracteres')
        senhaConfirmarInput.setAttribute('style', 'border-color: red')
    }

    if (senhaConfirmarInput.value != "" && senhaConfirmarInput.value != senhaInput.value) {
        mensageErrorSenha(senhaConfirmarInput.nextElementSibling, 'A senha deve coincidir com a anterior' )
        senhaConfirmarInput.setAttribute('style', 'border-color: red')
    }

    return formCorreto
}

// Diminui repetição de código na função validaSenha()
function mensageErrorSenha(spanIrmaoDom, texto) {
    let spanErrorDaSenha = spanIrmaoDom
    spanErrorDaSenha.style.display = 'block'
    spanErrorDaSenha.innerHTML = texto
    formCorreto = false

    return [spanErrorDaSenha, formCorreto]
}