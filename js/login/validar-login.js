import verificarCampos from "./verificar-campos.js"

let form = document.querySelector('#form-login-usuario')

form.addEventListener('submit', () => {
    event.preventDefault()

    verificarCampos(form)
})





