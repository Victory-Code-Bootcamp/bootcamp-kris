// console.log("Welcome to the JS-- Take Home Challenge: Day 1");

// Challenge: Generate Random User Data

// Your task is to create a Node.js command-line application that generates random user data using the Faker npm package. The application should allow users to specify the number of users to generate.

// Requirements:

// Use the faker package to generate random user data, including fields such as name, email, address, and phone number.

// Implement a command-line interface that prompts the user for the number of users to generate.

// Example Output:

// For an input of 5, the application should generate and display something like:

// Generated User Data:
// 1. Name: John Doe
//    Email: john.doe@example.com
//    Address: 123 Main St
//    Phone: (123) 456-7890

// 2. Name: Jane Smith
//    Email: jane.smith@example.com
//    Address: 456 Elm St
//    Phone: (987) 654-3210

// 3. Name: Alex Johnson
//    Email: alex.johnson@example.com
//    Address: 789 Oak St
//    Phone: (555) 123-4567

// 4. Name: ...
// ...
var { faker } = require("@faker-js/faker");

// Get number of times needed to loop through logic
let numberUsers = Number(process.argv[2]);

let generateList = (numberUsers) => {
  // Loop through the specific iterations
  let fakePersonGroup = [];
  for (i = 0; i < numberUsers; i++) {
    let fakePerson = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.street(),
      phone: faker.phone.number(),
    };
    fakePersonGroup.push(fakePerson);
  }
  return fakePersonGroup;
};

let finalList = generateList(numberUsers);
console.log(finalList);
