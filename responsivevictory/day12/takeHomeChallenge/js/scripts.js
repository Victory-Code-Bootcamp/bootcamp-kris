console.log("Welcome to the Take Home Challenge: Day 12!");

// Challenge 1
// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("Ford", "Contour", 1999, "Wintergreen");
const car2 = new Car("Dodge", "Stratus", 2001, "Gold");
const car3 = new Car("VW", "CC", 2009, "Silver");
const car4 = new Car("Chevy", "Camaro", 1967, "Baby Blue");

const carDetailsElement = document.getElementById("car-details");
carDetailsElement.innerHTML = `
  <h2>Car Details</h2>
  <ul>
    <li>${car1.make} ${car1.model} (${car1.year}), Color: ${car1.color}</li>
    <li>${car2.make} ${car2.model} (${car2.year}), Color: ${car2.color}</li>
    <li>${car3.make} ${car3.model} (${car3.year}), Color: ${car3.color}</li>
    <li>${car4.make} ${car4.model} (${car4.year}), Color: ${car4.color}</li>
  </ul>
`;
