// Challenge 1:
// Create a prompt asking for their name
let name = prompt(`What is your name?`);
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
// Use an alert() as the result for each case
switch (name.toLowerCase()) {
  case "authello":
    console.log(`Your name is seriously Authello!???!`);
    alert(`Your name is seriously Authello!???!`);
    break;
  case "onkur":
    console.log(`I see you, Onkur...`);
    alert(`I see you, Onkur...`);
    break;
  case "kris":
    console.log("Better luck next time, Kris!");
    alert("Better luck next time, Kris!");
    break;
  default:
    console.log(`Wow! I didn't see ${name} coming.`);
    alert(`Wow! I didn't see ${name} coming.`);
}

// Challenge 2:
// Create a prompt asking for their age and store the result in a variable
let userAge = Number(prompt("How old be you on this date in history??"));
// Write a function that takes the prompt result as a argument and returns ternary expression with a boolean depending if their age is less than or equal to 18
let assessment = (userAge) =>
  userAge <= 18 ? "You're too young to smoke." : "Smoke 'em if you got 'em!";

console.log(assessment(userAge));
alert(assessment(userAge));

// Challenge 3:
// You are given a string of characters.
let magicString = prompt("Tell me the string of your dreams...");
// Write a function that takes the string as an arguments and returns the codes below using if/else if statement
let codeReturn = (magicString) => {
  // AA if chars is greater than 15
  if (magicString.length > 15) {
    return "AA";
    console.log("Your secret code is: AA");
    // AB if chars is greater than 13 and less than or equal to 15
  } else if (magicString.length > 13 && magicString.length <= 15) {
    return "AB";
    console.log("Your secret code is: AB");
    // BB if chars is greater than 10 and less than or equal to 13
  } else if (magicString.length > 10 && magicString.length <= 13) {
    return "BB";
    console.log("Your secret code is: BB");
    // BC if chars is greater than 7 and less than or equal to 10
  } else if (magicString.length > 7 && magicString.length <= 10) {
    return "BC";
    console.log("Your secret code is: BC");
    // CC if chars is greater than 5 and less than or equal to 7
  } else if (magicString.length > 5 && magicString.length <= 7) {
    return "CC";
    console.log("Your secret code is: CC");
    // DD if chars is less than or equal to 5
  } else if (magicString.length <= 5) {
    return "DD";
    console.log("Your secret code is: DD");
  }
};
codeReturn(magicString);
alert(`Your secret code is: ${codeReturn(magicString)}`);

// Challenge 4:
// In this challenge you will be writing code to create functions capable of different arithmetic operations
// Write an add function that returns the result of num1 plus num2
let num1 = prompt("Enter a number.");
let num2 = prompt("Enter another number.");
let addFunction = (num1, num2) => Number(num1) + Number(num2);
console.log(`The value of ${num1} plus ${num2} is ${addFunction(num1, num2)}`);
alert(`The value of ${num1} plus ${num2} is ${addFunction(num1, num2)}`);

// Write a subtract function that returns the result of num1 minus num2
let subtractFunction = (num1, num2) => num1 - num2;
console.log(subtractFunction(3, 1));

// Write a multiply function that returns the result of num1 times num2
let multiplyFunction = (num1, num2) => num1 * num2;
console.log(multiplyFunction(1, 1));

// Write a divide function that returns the result of num1 divided num2
let divideFunction = (num1, num2) => num1 / num2;
console.log(divideFunction(100, 10));
