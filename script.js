let angle = 0;
const box = document.querySelector('.Box');
const totalSlides = document.querySelectorAll('.Box span').length;

function nextSlide() {
  angle -= 360 / totalSlides;
  box.style.transform = `rotateY(${angle}deg)`;
}

function prevSlide() {
  angle += 360 / totalSlides;
  box.style.transform = `rotateY(${angle}deg)`;
}

// Auto-slide functionality
let autoSlideInterval = setInterval(nextSlide, 3000);

// Stop auto-slide on user interaction
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    // Restart auto-slide after user interaction
    autoSlideInterval = setInterval(nextSlide, 3000);
  });
});
