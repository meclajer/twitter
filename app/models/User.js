class User {

    // const myUser = new User(1, "carlogilmar", "carlo", "Bio", "dateCreated", "lastUpdate")
    constructor(id, userName, name, bio, dateCreated, lastUpdate) {
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date
        this.lastUpdate = new Date
    }

    getUserName() {
        return this.userName
    }

    getBio() {
        return this.bio
    }

    getDateCreated() {
        return this.dateCreated
    }

    getLastUpdated() {
        return this.lastUpdate
    }

    setUserName(userName) {
        this.userName = userName
    }

    setBio(bio) {
        this.bio = bio
    }

}

module.exports = User