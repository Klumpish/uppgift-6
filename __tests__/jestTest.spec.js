// imports our function from main.js
const {
    transform
} = require("../main.js");

describe("Testing if text input becomes uppercase", () => {
    test("Should make text input uppercase", () => {
        expect(transform("hej")).toBe("HEJ");
        expect(transform("test")).toBe("TEST");
        expect(transform("KuL att TesTa")).toBe("KUL ATT TESTA");
    })
});
