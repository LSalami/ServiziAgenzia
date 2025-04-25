const slides = document.querySelectorAll(".slide");
let current = 0;

// Funzione per mostrare la slide corrente
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Gestore degli eventi per i tasti freccia
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % slides.length;
    showSlide(current);
  } else if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});

// Mostra la prima slide all'inizio
showSlide(current);
