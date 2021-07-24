/* jshint esversion: 6, jquery: true */
// Credit: Code inspired by Jeff Cuartas - https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
// Add Event Listener to second card so it flips when clicked
const card = document.getElementById("flip-card");

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}

