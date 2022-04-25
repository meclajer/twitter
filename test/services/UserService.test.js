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
        UserService.updateUserName(myUser, "carlog")
        expect(myUser.userName).toBe("carlog")

    });

    test('4) given a list of users give me the list of usernames', () => {

        // objects
        const myUser1 = UserService.create(1, "carlogilmar1", "carlo")
        const myUser2 = UserService.create(1, "carlogilmar2", "carlo")
        const myUser3 = UserService.create(1, "carlogilmar3", "carlo")

        const userNames = UserService.getAllUserNames([myUser1, myUser2, myUser3])

        // tests
        expect(userNames).toContain("carlogilmar1")
        expect(userNames).toContain("carlogilmar2")
        expect(userNames).toContain("carlogilmar3")

    });

});