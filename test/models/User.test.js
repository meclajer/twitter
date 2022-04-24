describe('UT of class User', () => {

    test('Uset Object constructor', () => {

        // objt
        const myUser = new User(1, "carlogilmar", "carlo", "Bio", "dateCreated", "lastUpdate")

        expect(myUser.id).toBe(1)
        expect(myUser.username).toBe("carlogilmar")
        expect(myUser.name).toBe("carlo")
        expect(myUser.bio).toBe("Bio")
        expect(myUser.dateCreated).toBe("dateCreated")
        expect(myUser.lastUpdate).toBe("lastUpdate")

    });

});