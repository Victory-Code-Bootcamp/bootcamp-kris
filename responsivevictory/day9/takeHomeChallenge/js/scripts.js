console.log("Welcome to the Take Home Challenge, Day 9");

// Challenge 1
// Write a function that takes two numbers as parameters and returns the larger one.
let largerReturns = (num1, num2) => {
  let largerNum = Math.max(num1, num2);
  console.log(`The largest number is ${largerNum}`);
  return largerNum;
};

let num1 = Number(prompt("Enter a number please."));
let num2 = Number(prompt("Enter another number please."));

let largerResult = largerReturns(num1, num2);
alert(`The largest number between your selection is ${largerResult}.`);
