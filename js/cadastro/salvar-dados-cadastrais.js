const salvarDadosCadastrais = function() {
    const listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios') || '[]')

    listaDeUsuarios.push(
        {
            nomeCadastrado: nome.value,
            sobrenomeCadastrado: sobrenome.value,
            emailCadastrado: email.value,
            senhaCadastrado: senha.value,
        }
    )

    localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios))
}

export default salvarDadosCadastrais