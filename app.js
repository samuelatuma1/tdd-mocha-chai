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

/**
 * 
 * @param {String} name : string representation of the name
 * @param {Number} age : number representaion of the age
 * @returns {object} the name and age encapsulated in an object
 */
const encapsulate = (name , age) =>{return {name, age}}


console.log(encapsulate('sam', 12))
module.exports = {
    addNums, isPrime, encapsulate
}

