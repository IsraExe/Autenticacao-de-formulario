import autenticacao from "./autenticacao.js"

function verificarCampos(form) {
    const todosOsCampos = document.querySelectorAll('.pega-input-js')

    for (let i = 0; i < todosOsCampos.length; i++) {
        let spanError = todosOsCampos[i].nextElementSibling
        if (todosOsCampos[i].value == '') {
            spanError.style.display = 'block' 
            todosOsCampos[i].setAttribute('style', 'border-color: red')  
        } else {
            todosOsCampos[i].setAttribute('style', 'border-color: black')
            spanError.style.display = 'none' 
        }
    }

    const transformarEmArray = Array.from(todosOsCampos)
    const todosOsCamposComValor = transformarEmArray.every((e) => e.value)

    if (todosOsCamposComValor) {
        autenticacao(form)
    } 
}

export default verificarCampos
