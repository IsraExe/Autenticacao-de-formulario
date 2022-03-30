let formCorreto = true

const validarSenha = function() {
    const senhaInput = document.querySelector('#senha')
    const senhaConfirmarInput = document.querySelector('#confirmar-senha')
  
    if (senhaInput.value.length > 0 && senhaInput.value.length < 8) {
        mensagemDeErroDaSenha(senhaInput.nextElementSibling, 'Sua senha deve ter no mínimo 8 caracteres')
        senhaInput.setAttribute('style', 'border-color: red')
    } 

    if (senhaConfirmarInput.value.length > 0 && senhaConfirmarInput.value.length < 8 ) {
        mensagemDeErroDaSenha(senhaConfirmarInput.nextElementSibling, 'Sua senha deve ter no mínimo 8 caracteres')
        senhaConfirmarInput.setAttribute('style', 'border-color: red')
    }

    if (senhaConfirmarInput.value != "" && senhaConfirmarInput.value != senhaInput.value) {
        mensagemDeErroDaSenha(senhaConfirmarInput.nextElementSibling, 'A senha deve coincidir com a anterior' )
        senhaConfirmarInput.setAttribute('style', 'border-color: red')
    }
    return formCorreto
}

// Diminui repetição de código na função validaSenha()
const mensagemDeErroDaSenha = function(spanIrmaoDom, texto) {
    const spanErrorDaSenha = spanIrmaoDom
    spanErrorDaSenha.style.display = 'block'
    spanErrorDaSenha.innerHTML = texto
    formCorreto = false

    return [spanErrorDaSenha, formCorreto]
}

export default validarSenha