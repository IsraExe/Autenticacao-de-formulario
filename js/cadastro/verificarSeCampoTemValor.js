import validarSenha from "./validarSenha.js"
import salvarDadosCadastrais from "./salvar-dados-cadastrais.js"

let formCorreto = true
const spanUserCriado = document.querySelector('.user-criado')

const verificarSeCampoTemValor = function() {
    const todosOsCampos = document.querySelectorAll('.pega-input-js')
    formCorreto = true
    for (let i = 0; i < todosOsCampos.length; i++) {
        const proximoIrmaoDom = todosOsCampos[i].nextElementSibling

        if (todosOsCampos[i].value == '') {
            proximoIrmaoDom.style.display = 'block'
            spanUserCriado.style.display = 'none' 
            todosOsCampos[i].setAttribute('style', 'border-color: red')
            formCorreto = false 
        } 

        if (todosOsCampos[i].value != '') {
            todosOsCampos[i].setAttribute('style', 'border-color: black')
            proximoIrmaoDom.style.display = 'none'
            if (todosOsCampos[i].classList.contains('senha')) {
                if (validarSenha() == false) {
                    console.log("Cheguei? foda")
                    formCorreto = false
                }
            }  
        }
    }

    if (formCorreto) {
        salvarDadosCadastrais()
        spanUserCriado.style.display = 'block'
    }
}



export default verificarSeCampoTemValor