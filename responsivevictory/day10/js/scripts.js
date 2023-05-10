console.log("Hello, World!");
// Global vs. Local Scope Challenge
// Write a function that declares a variable inside the function and another variable outside the function. Call the function and try to access both variables inside and outside the function. Observe the behavior and explain what happened.

let harborLocal = () => {
  let insideVar = "This is a local variable.";
  console.log(insideVar);
};
// Set up global variable
let outsideVar = "This is a global variable.";
console.log(outsideVar);
// Call the function
harborLocal();
// Attempt to use local variable outside of function just to watch it fail
// console.log(insideVar);

// Odd or Even Challenge
// Write a function that determines whether a number is odd or even

let oddVersusEven = (number) => (number % 2 === 0 ? console.log("even") : console.log("odd"));

oddVersusEven(20);
