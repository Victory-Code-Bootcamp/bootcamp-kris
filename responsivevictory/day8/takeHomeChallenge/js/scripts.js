console.log(`Hello, World!`);

// Math Challenges
// Math Challenge #1
// Store two numbers in two different variables. Create another variable that determines the biggest number of the two
const NUM_1 = prompt(`Enter a number. Any number.`);
const NUM_2 = prompt(`Enter another number. Any number`);
let bigNum = Math.max(NUM_1, NUM_2);
console.log(`The bigger number between ${NUM_1} and ${NUM_2} is ${bigNum}`);
alert(
  `You entered ${NUM_1} and ${NUM_2}. Of the two numbers, the bigger is ${bigNum}`
);

// Math Challenge #2
// Create a variable that generates a random number that is rounded down to the nearest integer

let randomNumber = Math.floor(Math.random() * 100);
console.log(
  `Your randomly generated number between 1 and 100 is ${randomNumber}`
);

// Math Challenge #3
// Have the user enter a number into the prompt and use that number to alert the user of the square root of the number they entered

let userNum = prompt(
  `I'll share the square root of a number, if you enter a number for me.`
);
let squareRoot = Math.sqrt(userNum);
alert(`The square root of ${userNum} is ${squareRoot}`);
