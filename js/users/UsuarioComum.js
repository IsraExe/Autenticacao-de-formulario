import TipoDeUsuario from "./TipoDeUsuario.js"

class UsuarioComum extends TipoDeUsuario {
    constructor(email, senha) {
        super(email, senha)
    }
}

export default UsuarioComum