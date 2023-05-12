console.log("Hello, World! Welcome to the Daily Challenge, Day 11.");

// FizzBuzz Challenge
// Write a function called fizzbuzz that will accept no arguments
// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// For every number that is divisible by 3 and 5, console log "FizzBuzz"
// For every number that is divisible by only 3 and not 5, console log "Fizz"
// For every number that is divisible by only 5 and not 3, console log "Buzz"

let fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`Fizz`);
    } else if (i % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();

// Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(evenSum(array));
