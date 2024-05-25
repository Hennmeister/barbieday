let currentIndex = 0;

function showCard(index) {
  const cards = document.querySelector(".cards");
  const totalCards = document.querySelectorAll(".card").length;
  if (index >= totalCards) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalCards - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  cards.style.transform = `translateX(${offset}%)`;
}

function nextCard() {
  showCard(currentIndex + 1);
}

function prevCard() {
  showCard(currentIndex - 1);
}

// Initialize the first card display
showCard(currentIndex);
