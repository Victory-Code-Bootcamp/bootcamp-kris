console.log("Hello, Poke World!");

// Challenge 2:
// Change text on button click Create a button element with the text "Click me!". When the button is clicked, change the text of an existing div element on the page with the id of "output" to "Button was clicked!".

// output = div id
// button id= changeText

window.onload = function () {
  const changeText = document.getElementById("changeText");
  const outputDiv = document.getElementById("output");

  changeText.addEventListener("click", () => {
    outputDiv.textContent = "Button was clicked!";
  });
};
