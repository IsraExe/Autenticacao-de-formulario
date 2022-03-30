import verificarSeCampoTemValor from "./verificarSeCampoTemValor.js"

const form = document.querySelector('#form-novo-usuario')

form.addEventListener('submit', () => {
    event.preventDefault()

    verificarSeCampoTemValor()     
})






