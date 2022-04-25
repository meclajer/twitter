const UserService = require("../services/UserService")

class UserView {

    static createUser(payload) {
        if (payload === null)
            return { error: "El payload no existe." }
        else if (typeof payload.userName !== 'string' || typeof payload.name !== 'string' || typeof payload.id !== 'number') {
            return { error: "Alguna variable necesita tener un valor válido" }
            //agregar validacion para error más preciso
        } else {
            const user = UserService.create(payload.id, payload.userName, payload.name)
            return user
        }
    }

}

module.exports = UserView