const UserService = require("../../app/services/UserService");

describe('Test for UserService', () => {

    test('1 create a new user using the UserService', () => {

        // objt
        const myUser = UserService.create(1, "carlogilmar", "carlo")

        // pru
        expect(myUser.userName).toBe("carlogilmar")
        expect(myUser.name).toBe("carlo")
        expect(myUser.id).toBe(1)
        expect(myUser.bio).not.toBeUndefined()

    });

});