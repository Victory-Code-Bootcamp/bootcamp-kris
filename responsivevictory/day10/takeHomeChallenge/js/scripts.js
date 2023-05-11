console.log("Let's play with Pokemon.");
// Create an async function that:
// Makes a request to the Pokemon API using fetch that passes in a pokemon that the user requests
// Stores this request into a variable
// Makes sure we use .json()
// Display the name of the Pokemon that you chose in an alert
window.onload = function () {
  document.getElementById("pokeButton").addEventListener("click", function () {
    let pokeChoice = document.getElementById("pokeInput").value;
    let pokeSelection = `Your chosen Pokemon is: ${pokeChoice}.`;
    console.log(pokeSelection);
  });
};
// Hard-Coded Version
// async function pokeGrab() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   const pokemon = await response.json();
//   console.log(pokemon);
// }

// pokeGrab();
