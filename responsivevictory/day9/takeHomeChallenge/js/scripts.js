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

// Challenge 2
// Write a function that takes two numbers as parameters and returns true if the first number is divisible by the second number, and false otherwise.

let divisibleResult = (divNum1, divNum2) => {
  if (divNum1 % divNum2 === 0) {
    console.log(`The first number is divisible by the second`);
    return true;
  } else if (divNum1 % divNum2 !== 0) {
    console.log(`The first number is not divisible by the second number`);
    return false;
  }
};

let divNum1 = Number(prompt("Please enter a number to divide."));
let divNum2 = Number(
  prompt("Please enter a number to divide the first number with.")
);
divResult = divisibleResult(divNum1, divNum2);
console.log(divResult);
if (divResult == true) {
  alert(`The first number ${divNum1} is divisible by ${divNum2}.`);
} else if (divResult == false) {
  alert(`The first number ${divNum1} is not divisible by ${divNum2}.`);
}
