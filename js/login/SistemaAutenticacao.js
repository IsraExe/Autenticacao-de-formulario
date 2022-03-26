//Ser autenticavel significa ter o método autenticar

class SistemaAutenticacao {
    static login(autenticavel, email, senha) {
        return autenticavel.autenticar(email, senha) 
    }
}

export default SistemaAutenticacao


