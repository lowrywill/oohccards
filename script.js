// Get the current sum of the sliders
var sum = 0;
for (var i = 0; i < 3; i++) {
  sum += parseInt(document.getElementById("slider" + i).value);
}

// Get the first card from the first deck
var card1 = document.getElementById("deck1").firstChild;

// Get the first card from the second deck
var card2 = document.getElementById("deck2").firstChild;

// Reveal the first card
card1.style.backgroundColor = "red";

// Discard the second card
document.getElementById("deck2").removeChild(card2);

// Ask the player a question
var question = "What is the color of card 1?";

// Get the player's answer
var answer = document.getElementById("questions").value;

// Check if the player's answer is correct
if (answer === "red") {
  // The player got the question correct
  document.getElementById("questions").value = "";
} else {
  // The player got the question wrong
  document.getElementById("questions").value = "Incorrect. The color of card 1 is red.";
}
