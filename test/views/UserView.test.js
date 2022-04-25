const UserView = require("../../app/views/UserView");

describe('Test for UserView', () => {

    test('Return an error object when try to create a new user with an null payload', () => {

        const payload = null
        const result = UserView.createUser(payload)

        // https: //jestjs.io/docs/using-machers#strings
        expect(result.error).toMatch(/payload no existe/)

    });

    test('Return an error object when try to create a new user with a pyload with invalid properties', () => {

        // objects
        const payload = { userName: null, name: 12, id: "id" }
        const result = UserView.createUser(payload)

        // tests
        expect(result.error).toMatch(/necesita tener un valor válido/)

    });

    test('Return an error object when try to create a new user with a pyload with missing properties', () => {

        // objt
        const payload = { userName: "username" }
        const result = UserView.createUser(payload)

        // test
        expect(result.error).toMatch(/necesitan tener un valor valido/)

    });

});