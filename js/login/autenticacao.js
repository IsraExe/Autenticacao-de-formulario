import SistemaAutenticacao from "./SistemaAutenticacao.js"
import UsuarioComum from "../users/UsuarioComum.js"
import Administrador from "../users/Administrador.js" 

const novoAdministrador = new Administrador("adm@mail.com", "1234") 
const novoUsuario = new UsuarioComum("user@mail.com", "123") 

function autenticacao(form) {
    const loginUsuarioComum = SistemaAutenticacao.login(novoUsuario, form.email.value, form.senha.value)
    const usuarioLogado = loginUsuarioComum.every( (verdadeiro) => verdadeiro) // verifica se cada elemento da array retorna true

    const loginAdministrador = SistemaAutenticacao.login(novoAdministrador, form.email.value, form.senha.value)
    const administradorLogado = loginAdministrador.every( (verdadeiro) => verdadeiro)

    console.log(loginUsuarioComum)
    if (usuarioLogado) {
        window.location.href = './usuario-comum.html'
    } else if (administradorLogado) {
        window.location.href = './administrador.html'
    } else {
        const preenchimentoErrado = document.querySelector('h2')
        preenchimentoErrado.classList.add('error-de-autenticacao')
        preenchimentoErrado.textContent = "Email e/ou senha incorreto" 
    } 
}

export default autenticacao