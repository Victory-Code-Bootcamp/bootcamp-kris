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
    console.log("Your secret code is: AA");
    return "AA";
    // AB if chars is greater than 13 and less than or equal to 15
  } else if (magicString.length > 13 && magicString.length <= 15) {
    console.log("Your secret code is: AB");
    return "AB";
    // BB if chars is greater than 10 and less than or equal to 13
  } else if (magicString.length > 10 && magicString.length <= 13) {
    console.log("Your secret code is: BB");
    return "BB";
    // BC if chars is greater than 7 and less than or equal to 10
  } else if (magicString.length > 7 && magicString.length <= 10) {
    console.log("Your secret code is: BC");
    return "BC";
    // CC if chars is greater than 5 and less than or equal to 7
  } else if (magicString.length > 5 && magicString.length <= 7) {
    console.log("Your secret code is: CC");
    return "CC";
    // DD if chars is less than or equal to 5
  } else if (magicString.length <= 5 && magicString.length > 0) {
    console.log("Your secret code is: DD");
    return "DD";
  } else if (magicString.length === 0) {
    console.log("Please enter a valid string.");
    return "Please enter a valid string.";
  }
};
// Put function results in variable so that console statement doesn't register twice when the alert happens
let finalResult = codeReturn(magicString);

if (magicString.length >= 1) {
  alert(`Your secret code is: ${finalResult}`);
} else if (magicString.length === 0) {
  alert(`Please enter a valid string.`);
}
// Challenge 4:
// In this challenge you will be writing code to create functions capable of different arithmetic operations
// Write an add function that returns the result of num1 plus num2
let addNum1 = Number(prompt("Enter a number to add."));
let addNum2 = Number(prompt("Enter another number to add."));
let addFunction = (addNum1, addNum2) => addNum1 + addNum2;
console.log(
  `The value of ${addNum1} plus ${addNum2} is ${addFunction(addNum1, addNum2)}`
);
alert(
  `The value of ${addNum1} plus ${addNum2} is ${addFunction(addNum1, addNum2)}`
);

// Write a subtract function that returns the result of num1 minus num2
let subNum1 = Number(prompt("Enter a number to subtract."));
let subNum2 = Number(prompt("Enter another number to subtract."));
let subtractFunction = (subNum1, subNum2) => subNum1 - subNum2;
console.log(
  `The value of ${subNum1} minus ${subNum2} is ${subtractFunction(
    subNum1,
    subNum2
  )}`
);
alert(
  `The value of ${subNum1} minus ${subNum2} is ${subtractFunction(
    subNum1,
    subNum2
  )}`
);

// Write a multiply function that returns the result of num1 times num2
let multNum1 = Number(prompt("Enter a number to multiply."));
let multNum2 = Number(prompt("Enter another number to multiply."));
let multiplyFunction = (multNum1, multNum2) => multNum1 * multNum2;
console.log(
  `The value of ${multNum1} multiplied by ${multNum2} is ${multiplyFunction(
    multNum1,
    multNum2
  )}`
);
alert(
  `The value of ${multNum1} multiplied by ${multNum2} is ${multiplyFunction(
    multNum1,
    multNum2
  )}`
);

// Write a divide function that returns the result of num1 divided num2
let divNum1 = Number(prompt("Please enter a number to divide."));
let divNum2 = Number(prompt("Please enter another number to divide."));
let divideFunction = (divNum1, divNum2) => divNum1 / divNum2;
console.log(
  `The value of ${divNum1} divided by ${divNum2} is ${divideFunction(
    divNum1,
    divNum2
  )}`
);
alert(
  `The value of ${divNum1} divided by ${divNum2} is ${divideFunction(
    divNum1,
    divNum2
  )}`
);
