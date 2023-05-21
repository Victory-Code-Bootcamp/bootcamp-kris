console.log("Welcome to JS-- Daily Challenge: Day 1");

// Challenge 1: Array Spread
// Combine two arrays into a single array using the spread operator.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArrays = [...array1, ...array2];
console.log(combinedArrays);

// Challenge 2: Object Spread
// Create a new object by merging multiple objects using the spread operator.

function Person(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyeColor = eyeColor;
}

const person1 = new Person("Kris", 35, "Hazel");
const person2 = new Person("Brielle", 25, "Blue");
const person3 = new Person("Clara", 3, "Brown");

const combinedPersons = { ...person1, ...person2, ...person3 };

console.log(combinedPersons);

// Challenge 3: Array Rest
// Create a function that accepts a variable number of arguments and uses the rest operator to gather them into an array.

function arrayRest(...numbers) {
  let array = [];
  for (number of numbers) {
    array.push([number]);
  }
  return array;
}

console.log(arrayRest(2, 4, 6, 8));

// Challenge 5: Array Destructuring
// Extract individual elements from an array using array destructuring.

const names = ["Victor", "Onkur", "Kris"];

const [pers1, pers2, pers3] = names;

console.log(pers1);
console.log(pers2);
console.log(pers3);

// Challenge 6: Object Destructuring
// Extract specific properties from an object using object destructuring.

const pers = {
  name: "John",
  age: 87,
  occupation: "Grandfather",
};

const {name, age, occupation} = pers;

console.log(name);
console.log(age);
console.log(occupation);

// Challenge 7: Destructuring with Default Values
// Use destructuring to assign default values to variables when extracting from an array or object.

// Challenge 8: Destructuring Function Parameters
// Create a function that accepts an object as a parameter and uses destructuring to extract specific properties.
