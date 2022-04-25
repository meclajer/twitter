const User = require("../models/User")

class UserService {

    static create(id, userName, name) {
        return new User(id, userName, name, "Hi this is my bio and this is how I'm...")
    }

    static getInfo(user) {
        return Object.values(user)
    }

    static updateUserName(user, userName) {
        console.info(user)
        user.setUserName(userName)
    }

    static getAllUserNames(list) {

        const usersListName = list.map(user => user.userName)

        return usersListName
    }

}

module.exports = UserService