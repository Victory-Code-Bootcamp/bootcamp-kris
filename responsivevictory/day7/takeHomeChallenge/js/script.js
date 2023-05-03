console.log("Welcome to the fortune teller...");

const NUM_CHILDREN = 0;
const PARTNER = "Brielle";
let destination = "Seattle";
let jobTitle = "Developer";

const BIRTH_YEAR = 1988;
let futureYear = 2038;

console.log(
  `In the future, you will be a ${jobTitle} in ${destination}, and married to ${PARTNER} with ${NUM_CHILDREN} kids.`
);

console.log(
  `I will be ${futureYear - BIRTH_YEAR - 1} or ${
    futureYear - BIRTH_YEAR
  } in ${futureYear}.`
);
