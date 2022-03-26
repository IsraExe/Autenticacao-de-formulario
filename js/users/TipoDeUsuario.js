// classe abstrata
class TipoDeUsuario {
    constructor(email, senha) {
        this._email = email
        this._senha = senha        
    }

    autenticar(email, senha) {
        return [email == this._email, senha == this._senha] 
    }
}

export default TipoDeUsuario