class UserView {

    static createUser(payload) {
        if (payload === null)
            return { error: "El payload no existe." }
        if (typeof payload.userName !== 'string' || typeof payload.name !== 'string' || typeof payload.id !== 'number') {
            console.log(typeof payload.userName + " - " + typeof payload.name + " - " + typeof payload.id)
            return { error: "Alguna variable necesita tener un valor válido" }
            //agregar validacion para error más preciso
        }

    }

}

module.exports = UserView