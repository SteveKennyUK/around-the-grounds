// Add Event Listener to second card so it flips when clicked
const card = document.getElementById("flip-card");

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}