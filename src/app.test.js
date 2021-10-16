const app = require("./app")
// @ponicode
describe("toggleMenu", () => {
    let inst

    beforeEach(() => {
        inst = new app.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggleMenu()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateMenu", () => {
    let inst

    beforeEach(() => {
        inst = new app.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.updateMenu(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.updateMenu(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.updateMenu(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
