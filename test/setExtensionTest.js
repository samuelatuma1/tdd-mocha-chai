const {assert} = require("chai")
const {union, intersect, difference} = require('../setExtension.js')

describe("Set Extension", () => {
    it("union should return a union of all input set objects encapsulated in a set Object", () => {
        assert.deepEqual(union(new Set([1, 2, 3, 4, 5, 6]), new Set([2, 4, 6, 8, 10])), new Set([1, 2, 3, 4, 5, 6, 8, 10]))
    })
    it("intersect should return comonalities between all input set parameters", () => {
        assert.deepEqual(intersect(new Set([1, 2, 3, 4, 5]), new Set([2, 4, 6, 8, 10])), new Set([2, 4]))
    })
    it("difference should return elements in set1 that doesn't appear in set2", () => {
        assert.deepEqual(difference(new Set([1, 2, 3, 4, 5]), new Set([2, 4, 6, 8, 10])), new Set([1, 3, 5]))
    })
})

