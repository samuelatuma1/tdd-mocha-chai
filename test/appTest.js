const {assert} = require("chai")
const {addNums, isPrime} = require("../app.js")
const {users, dfs} = require('../depth_first.js')

describe("App", function(){
    it("should return true if it sums up data correctly", function (){
        assert.equal(addNums(2, 3) == 5, true)
    });
    it("should return true of a number is Prime", () => {
        assert.equal(isPrime(2), true)
    });
})

describe("Depth First Search", () => {
    it("Should return da over d based on the search", () => {
        assert.equal(dfs(users, 'a', 'd'), 'da')
    })
})