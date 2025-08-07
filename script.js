let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slider .slide");
const prevBtn = document.querySelector(".hero-slider .prev");
const nextBtn = document.querySelector(".hero-slider .next");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Buton olayları
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Otomatik geçiş (5 saniyede bir)
setInterval(nextSlide, 5000);

// Sayfa yüklendiğinde ilk slaytı göster
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});

