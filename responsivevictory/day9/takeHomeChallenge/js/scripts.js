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
const birthYear = Number(prompt("Please enter the year of your birth."));
const birthMonth = Number(prompt("Please enter the month of your birth."));
const birthDay = Number(prompt("Please enter the numeric day of your birth."));
const birthDate = new Date(`${birthYear}, ${birthMonth}, ${birthDay}`);
console.log(birthDate);
const birthWeekDay = birthDate.getDay();
console.log(birthWeekDay);
// switch (birthDay) {
//   case 0:
//     console.log("The day of your birth is Sunday.");

//     break;
// }
