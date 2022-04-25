class User {

    // constructor
    constructor(id, userName, name, bio, dateCreated, lastUpdate) {
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date
        this.lastUpdate = new Date
    }

    // geters
    getUserName() { return this.userName }
    getBio() { return this.bio }
    getDateCreated() { return this.dateCreated }
    getLastUpdated() { return this.lastUpdate }

    // seters
    setUserName(userName) { this.userName = userName }
    setBio(bio) { this.bio = bio }

}

module.exports = User