/**
 * 
 * @param {Number} a : -> Number to add
 * @param {Number} b : -> Number to add
 * @returns {Number} the value of a + b
 */
function addNums(a , b){
    return a + b
}


/**
 * Checks if a number is Prime and returns true if it, else false
 * @param {Number} num : The number we wish to check if is Prime
 * @returns {Boolean} true if number isPrime, else false
 */
function isPrime(num){
    for(let idx = 2; idx < (num ** 0.5) + 0.00001; idx++){
        if (num % idx === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(2))


module.exports = {
    addNums, isPrime
}

