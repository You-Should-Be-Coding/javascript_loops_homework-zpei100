//you will check whether a string has valid parings of open and closed parenthesis.
// 1) a pair of parenthesis consist of an open and a closed parenthesis: ( and ) and every parenthesis must be paired.
// 2) the open parenthesis must be before the closed parenthesis. Example: ( ) is valid, but ) ( is not valid
// 3) we can have nested parenthesis: ((()())(()))
// some examples of invalid strings:
// 1) (() -- 2 open parenthesis, but only 1 closed parenthesis. There is an unpaired open parenthesis
// 2) ())( -- () is correct, but )( is not
let checkValid = function(str) {
    let isValid = 




    return isValid
}

let answer0 = isValid("()") //should be true
console.log(`answer0 is ${answer0}`)
let answer1 = isValid(")(") //should be false
console.log(`answer1 is ${answer1}`)
let answer2 = isValid("((()())(()))") //should be true
console.log(`answer2 is ${answer2}`)
let answer3 = isValid("(()") //should be false
console.log(`answer3 is ${answer3}`)
let answer4 = isValid("())(") //should be false
console.log(`answer4 is ${answer4}`)
let answer5 = isValid("(()(()(())())(((()()(())(()(()()))))))") //should be true
console.log(`answer5 is ${answer5}`)
let answer5 = isValid("(()(()(())())((()()(())(()(()()))))))") //should be false 
console.log(`answer6 is ${answer6}`)
let answer5 = isValid("(()(()(())())(((()()(())(()(()())))))") //should be false 
console.log(`answer7 is ${answer7}`)