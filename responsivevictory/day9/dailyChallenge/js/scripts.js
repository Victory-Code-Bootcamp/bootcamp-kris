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