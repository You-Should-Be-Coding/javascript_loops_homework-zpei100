//for loop: repeat code execution for each i. Starting at i=0, ending until i = 10
for (let i = 0; i < 10; i++) {
    //the code inside the for loop, runs once per value of i
    console.log(i)

    //at the end, i's value is increased by 1 (due to the i++ statement above)
}

//example usage:
//checking to see if a number is prime (a number is prime if it can only evenly divide by 1 and itself)
let maybePrimeNumber = 1234567
let isPrime = true
for (let i = 2; i < maybePrimeNumber; i++) {
    if (maybePrimeNumber % i === 0) {
        //if the number we are checking can divide by i evenly, then the number is not prime.
        isPrime = false
    }
}
console.log(isPrime)

//while loop example:
let isPrime = true
let i = 2
//continue checking if our number is a prime or not while i is less than our number, and while we haven't confirmed it is not prime yet
while (i < maybePrimeNumber || isPrime) {
    if (maybePrimeNumber % i === 0 ) {
        isPrime = false
    }
}
console.log(isPrime)


//An example finding the sum of all numbers from an array
let someNumbers = [1, 5, 13, 92, -24, 18, -3, 0, -11]
let sum = 0
for (let i = 0; i < someNumbers.length; i++) {
    let ithNumber = someNumbers[i]
    sum = sum + ithNumber
}
console.log(sum)
