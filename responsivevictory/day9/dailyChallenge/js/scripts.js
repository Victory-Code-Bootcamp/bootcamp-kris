// Challenge 1:
// Create a prompt asking for their name
let name = prompt(`What is your name?`);
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
// Use an alert() as the result for each case
switch (name.toLowerCase()) {
  case "authello":
    alert(`Your name is seriously Authello!???!`);
    break;
  case "onkur":
    alert(`I see you, Onkur...`);
    break;
  case "kris":
    alert("Better luck next time, Kris!");
    break;
  default:
    alert(`Wow! I didn't see ${name} coming.`);
}

// Challenge 2:
// Create a prompt asking for their age and store the result in a variable
let userAge = prompt("How old be you on this date in history??");
// Write a function that takes the prompt result as a argument and returns ternary expression with a boolean depending if their age is less than or equal to 18
let assessment = (userAge) =>
  userAge <= 18
    ? "Sorry, you're not old enough."
    : "You are over 18! Smoke away!";
console.log(assessment());

// Challenge 3:
// You are given a string of characters.
let magicString = prompt("Tell me the string of your dreams...");
// Write a function that takes the string as an arguments and returns the codes below using if/else if statement
let codeReturn = (magicString) => {
  // AA if chars is greater than 15
  if (magicString.length > 15) {
    console.log("AA");
    // AB if chars is greater than 13 and less than or equal to 15
  } else if (magicString.length > 13 && magicString.length <= 15) {
    console.log("AB");
    // BB if chars is greater than 10 and less than or equal to 13
  } else if (magicString.length > 10 && magicString.length <= 13) {
    console.log("BB");
    // BC if chars is greater than 7 and less than or equal to 10
  } else if (magicString.length > 7 && magicString.length <= 10) {
    console.log("BC");
    // CC if chars is greater than 5 and less than or equal to 7
  } else if (magicString.length > 5 && magicString.length <= 7) {
    console.log("CC");
    // DD if chars is less than or equal to 5
  } else if (magicString.length <= 5) {
    console.log("DD");
  }
};
codeReturn(magicString);
