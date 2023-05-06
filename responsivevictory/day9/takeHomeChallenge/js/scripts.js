console.log("Welcome to the Take Home Challenge, Day 9");

// Challenge 1
// Write a function that takes two numbers as parameters and returns the larger one.
let largerReturns = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    alert("One of the numbers you entered wasn't really a number!");
    return;
  } else if (num1 && num2) {
    let largerNum = Math.max(num1, num2);
    console.log(`The largest number is ${largerNum}`);
    return largerNum;
  }
};

let num1 = Number(prompt("Enter a number please."));
let num2 = Number(prompt("Enter another number please."));

let largerResult = largerReturns(num1, num2);
if (largerResult === undefined) {
  alert(`You're going to have to try again next time, my friend.`);
} else if (largerResult) {
  alert(`The largest number between your selection is ${largerResult}.`);
}

// Challenge 2
// Write a function that takes two numbers as parameters and returns true if the first number is divisible by the second number, and false otherwise.

let divisibleResult = (divNum1, divNum2) => {
  if (isNaN(divNum1) || isNaN(divNum2)) {
    console.log(`One of these entries was not a real number.`);
    return NaN;
  } else if (divNum1 % divNum2 === 0) {
    console.log(`The first number is divisible by the second`);
    return true;
  } else {
    console.log(`The first number is not divisible by the second number`);
    return false;
  }
};

let divNum1 = Number(prompt("Please enter a number to divide."));
let divNum2 = Number(
  prompt("Please enter a number to divide the first number with.")
);

let divResult = divisibleResult(divNum1, divNum2);
console.log(divResult);

if (divResult === true) {
  alert(`The first number ${divNum1} is divisible by ${divNum2}.`);
} else if (divResult === false) {
  alert(`The first number ${divNum1} is not divisible by ${divNum2}.`);
} else if (isNaN(divResult)) {
  alert("Pick a real number next time, buddy.");
}

// Challenge 3
// Declare a variable called birthday that looks like this: const birthday = new Date('August 19, 1975 23:15:30');
// Use the getDay() method to create a variable that keeps track of the day of your birthday
// Write a switch statement using the day of your birthday variable that will cover all cases from Monday thru Friday, console log the day of the week in a string

const birthYear = Number(prompt("Please enter the year of your birth. (YYYY)"));
const birthMonth = Number(
  prompt("Please enter the numeric month of your birth (MM).")
);
const birthDay = Number(
  prompt("Please enter the numeric day of your birth. (DD)")
);

let birthDate;
let birthWeekDay;

if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
  console.log(`Please enter a valid, numeric response.`);
  alert(`Please enter a valid, numeric response`);
} else if ((birthYear, birthMonth, birthDay)) {
  birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
  console.log(birthDate.toLocaleDateString());
}
console.log(birthDate);
birthWeekDay = birthDate.getDay();
switch (birthWeekDay) {
  case 0:
    birthWeekDay = "Sunday";
    console.log("The day of your birth is Sunday.");
    break;
  case 1:
    birthWeekDay = "Monday";
    console.log("The day of your birth is Monday.");
    break;
  case 2:
    birthWeekDay = "Tuesday";
    console.log("The day of your birth is Tuesday.");
    break;
  case 3:
    birthWeekDay = "Wednesday";
    console.log("The day of your birth is Wednesday.");
    break;
  case 4:
    birthWeekDay = "Thursday";
    console.log("The day of your birth is Thursday.");
    break;
  case 5:
    birthWeekDay = "Friday";
    console.log("The day of your birth is Friday.");
    break;
  case 6:
    birthWeekDay = "Saturday";
    console.log("The day of your birth is Saturday.");
    break;
}
alert(`Did you know you were born on a ${birthWeekDay}?`);

// Challenge 4
// Same Questions was answered in Challenge 2

// Challenge 5
// You're tasked with writing a function calculateSum that calculates the sum of two input numbers, a and b, and returns the result. However, the function should handle the following edge cases:
// If either a or b is not a number, the function should return an error message "Please provide valid numbers".
// If either a or b is undefined, the function should use a default value of 0.
// If either a or b is null, the function should use a default value of 0.
// If either a or b is a floating-point number, the function should round it to the nearest integer before performing the calculation.
// If the sum of a and b is greater than 100, the function should return an error message "Sum is too large".
let a = Number(prompt("Enter a number to add to your sum."));
let b = Number(prompt("Enter another number to add to your sum."));

let calculatesSum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert("Please provide a valid number.");
  } else if (typeof a === "undefined") {
    a = 0;
  } else if (typeof b === "undefined") {
    b = 0;
  } else if (a === null) {
    a = 0;
  } else if (b === null) {
    b = 0;
  } else if (!Number.isInteger(a)) {
    a = Math.round(a);
    return calculatesSum(a, b);
  } else if (!Number.isInteger(b)) {
    b = Math.round(b);
    return calculatesSum(a, b);
  } else if (a + b > 100) {
    console.log(`Sum is too large.`);
    alert(`Sum is too large.`);
  }

  let sumReturn = (a, b) => {
    let returnedSum = a + b;
    console.log(`The sum of ${a} and ${b} is ${returnedSum}.`);
    alert(`The sum of ${a} and ${b} is ${returnedSum}.`);
    return returnedSum;
  };
  sumReturn(a, b);
};

calculatesSum(a, b);
