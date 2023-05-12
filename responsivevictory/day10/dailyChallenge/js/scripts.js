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

let oddVersusEven = (number) =>
  number % 2 === 0 ? console.log("even") : console.log("odd");

oddVersusEven(20);

// Calculate Total Challenge
// Create a function called calculateTotal that calculates the total cost of a purchase, including tax.
// The function should take two parameters: price (a number representing the price of the item) and taxRate (a number representing the tax rate as a decimal, e.g. 0.08 for 8%).
// The function should calculate the total cost by adding the price and the amount of tax, which is calculated by multiplying the price by the tax rate.
// The function should then return the total cost as a string with two decimal places.
// Finally, log the result of calling the function with a price of 20 and a tax rate of 0.1. Hint: Remember to properly scope your variables within the function to prevent naming conflicts and to ensure that they are only accessible where they are needed.

let calculateTotal = (price, taxRate) => {
  totalTax = price * taxRate;
  totalCost = price + totalTax;
  return totalCost.toFixed(2);
};

console.log(calculateTotal(20, 0.1));
