console.log("Let's play with Pokemon.");
// Create an async function that:
// Makes a request to the Pokemon API using fetch that passes in a pokemon that the user requests
// Stores this request into a variable
// Makes sure we use .json()
// Display the name of the Pokemon that you chose in an alert
window.onload = function () {
  document.getElementById("pokeButton").addEventListener("click", function () {
    let pokeChoice = document.getElementById("pokeInput").value.toLowerCase();
    let pokeSelection = `Your chosen Pokemon is: ${pokeChoice}.`;
    console.log(pokeSelection);
    selectPokemon(pokeChoice);
  });
};

async function selectPokemon(pokeSelection) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokeSelection}`
  );
  const chosenPoke = await response.json();
  console.log(chosenPoke);

  // Create a new div element to hold the Pokemon data
  const pokeDataDiv = document.createElement("div");

  // Add the pokemon name to the div
  const pokeNameElement = document.createElement("p");
  pokeNameElement.textContent = `Name: ${chosenPoke.name}`;
  pokeDataDiv.appendChild(pokeNameElement);

  // Add the pokemon sprites to the div as a list
  const pokeSpritesElement = document.createElement("p");
  pokeSpritesElement.textContent = `Sprites: `;
  const pokeSpritesList = document.createElement("ul");
  const pokeSpritesListItem = document.createElement("li");
  const pokeSpriteImg = document.createElement("img");
  pokeSpriteImg.src = chosenPoke.sprites.front_default;
  pokeDataDiv.appendChild(pokeSpriteImg);
  pokeSpritesListItem.textContent = chosenPoke.sprites.front_default;
  pokeSpritesList.appendChild(pokeSpritesListItem);
  pokeSpritesElement.appendChild(pokeSpritesList);
  pokeDataDiv.appendChild(pokeSpritesElement);
  //   console.log(chosenPoke.sprites.front_default);
  // Add the pokemon abilities to the div as a list
  const pokeAbilitiesElement = document.createElement("p");
  pokeAbilitiesElement.textContent = `Abilities: `;
  const pokeAbilitiesList = document.createElement("ul");
  for (let i = 0; i < chosenPoke.abilities.length; i++) {
    const pokeAbilityListItem = document.createElement("li");
    pokeAbilityListItem.textContent = chosenPoke.abilities[i].ability.name;
    pokeAbilitiesList.appendChild(pokeAbilityListItem);
  }
  pokeAbilitiesElement.appendChild(pokeAbilitiesList);
  pokeDataDiv.appendChild(pokeAbilitiesElement);

  // Add the div to the HTML page
  document.getElementById("pokeData").appendChild(pokeDataDiv);
}

// Hard-Coded Version
// async function pokeGrab() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   const pokemon = await response.json();
//   console.log(pokemon);
// }

// pokeGrab();
