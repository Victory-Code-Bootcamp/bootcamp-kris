console.log("Welcome to the Daily Challenge, Day 12!");

// Challenge 1
// Create a new object called Donis Kia
// Donis Kia should store key value pairs of things the car could have
// One of the keys stored should be a playlist that contains a list of Donis favorite songs

const donisKia = {
  keys: true,
  year: 2024,
  color: "teal",
  playlist: ["Mathematics", "Get By", "4 Winds"],
};

// Challenge 2
// Create an object called "car" with properties "make", "model", "year", and "color". Use dot notation to access the value of the "year" property and console.log it.

const car = {
  Make: "Ford",
  Model: "Explorer",
  Year: 2016,
  Color: "Black",
};

console.log(car.Year);

// Challenge 3
// Create a class called "Rectangle" with properties "length" and "width". Add a method to the class called "area" that calculates and returns the area of the rectangle (length x width). Create a new instance of the class and console.log its area.

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(5, 20);
console.log(rectangle.area());

