const User = require("../../app/models/User");

describe('UT of class User', () => {

    test('Uset Object constructor', () => {

        // objt
        const myUser = new User(1, "carlogilmar", "carlo", "Bio")

        expect(myUser.id).toBe(1)
        expect(myUser.userName).toBe("carlogilmar")
        expect(myUser.name).toBe("carlo")
        expect(myUser.bio).toBe("Bio")
        expect(myUser.dateCreated).not.toBeUndefined()
        expect(myUser.lastUpdate).not.toBeUndefined()

    });

    test('getters', () => {

        // objt
        const myUser = new User(1, "carlogilmar", "carlo", "Bio")

        expect(myUser.getUserName).toBe("carlogilmar")
        expect(myUser.getBio).toBe("Bio")
        expect(myUser.getDateCreated).not.toBeUndefined()
        expect(myUser.getLastUpdated).not.toBeUndefined()

    });

});