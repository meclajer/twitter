const UserService = require("../../app/services/UserService");

describe('Test for UserService', () => {

    test('1) Create a new user using the UserService', () => {

        // objt
        const myUser = UserService.create(1, "carlogilmar", "carlo")

        // tests
        expect(myUser.userName).toBe("carlogilmar")
        expect(myUser.name).toBe("carlo")
        expect(myUser.id).toBe(1)
        expect(myUser.bio).not.toBeUndefined()

    });

    test('2) Get all data in a list', () => {

        // objts
        const myUserService = UserService.create(1, "carlogilmar", "carlo")
        const myUserInfoList = UserService.getInfo(myUserService)

        // tests
        expect(myUserInfoList[0]).toBe(1)
        expect(myUserInfoList[1]).toBe("carlogilmar")
        expect(myUserInfoList[2]).toBe("carlo")
        expect(myUserInfoList[3]).toBe("Hi this is my bio and this is how I'm...")

    });

    test('3) Update UserName', () => {

        // objt
        const myUser = UserService.create(1, "carlogilmar", "carlo")

        // tests
        myUser.updateUserName(myUser, "carlog")
        expect(myUser.userName).toBe("carlog")

    });

});