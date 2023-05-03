console.log("Hello, World.");

// Challenge 1:
let firstName = prompt("Please enter your first name.");

console.log(`Your first name is ${firstName}`);

console.log(`There are ${firstName.length} characters in that name.`);

alert(
  `Your first name is is ${firstName}. There are ${firstName.length} characters in your name.`
);

// Challenge 2:
let favoriteColor = prompt("Please enter your favorite color.");
let favoriteFood = prompt("Please enter your favorite food.");

alert(
  "Your favorite food and color combined are ".concat(
    favoriteColor.toUpperCase(),
    favoriteFood.toUpperCase()
  )
);

// Challenge 3
let katesString = prompt(
  "Pretend you are a designer named Kate and please enter the string of your dreams."
);
alert(`${katesString.charAt(0).toUpperCase()}`);

// Challenge 4:
let maxsString = prompt(
  "Pretend you are a programmer named Max and provide me a string."
);
alert(
  `${maxsString.includes(
    "a certain word"
  )}: that the string contains 'a certain word'`
);
