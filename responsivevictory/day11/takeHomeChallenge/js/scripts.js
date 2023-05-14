console.log("Hello, Poke World!");
// Challenge 1:
// Create a button with text that says: Click me to see me
// Now add the following functionality:
// If you haven't already, create a function that will make the API request
// Add an event listener to your button
// When your button is clicked, it should make the API request and append the pokemon name to the DOM using an h1.

document.addEventListener("DOMContentLoaded", function () {
  let pokeInput = document.getElementById("pokeChoice");
  let pokeClick = document.getElementById("pokeClick");

  pokeClick.addEventListener("click", function () {
    let chosenPoke = pokeInput.value.toLowerCase();
    console.log(chosenPoke);

    selectPokemon(chosenPoke);
  });

  async function selectPokemon(chosenPoke) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${chosenPoke}`
    );
    const pokeSelection = await response.json();
    console.log(pokeSelection);
  }
});

// Challenge 2:
// Change text on button click Create a button element with the text "Click me!". When the button is clicked, change the text of an existing div element on the page with the id of "output" to "Button was clicked!".

window.onload = function () {
  const changeText = document.getElementById("changeText");
  const outputDiv = document.getElementById("output");

  changeText.addEventListener("click", () => {
    outputDiv.textContent = "Button was clicked!";
  });
};
