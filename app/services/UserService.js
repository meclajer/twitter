const User = require("../models/User")

class UserService {

    static create(id, userName, name) {
        return new User(id, userName, name, "Hi this is my bio and this is how I'm...")
    }

    static getInfo(user) {
        return Object.values(user)
    }

}

module.exports = UserService