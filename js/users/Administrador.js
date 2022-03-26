import TipoDeUsuario from "./TipoDeUsuario.js"

class Administrador extends TipoDeUsuario {
    constructor(email, senha) {
        super(email, senha)
    }
}

export default Administrador

