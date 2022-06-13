const {assert} = require("chai")
const {addNums, isPrime} = require("../app.js")

describe("App", function(){
    it("should return true if it sums up data correctly", function (){
        assert.equal(addNums(2, 3) == 5, true)
    });
    it("should return true of a number is Prime", () => {
        assert.equal(isPrime(2), true)
    })
})