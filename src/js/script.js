// Menu

const menuToggle = document.querySelector('#button-header');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);

  menu.classList.toggle('open');

  if (!isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.carousel__button--prev');
  const nextButton = document.querySelector('.carousel__button--next');
  const carouselItems = document.querySelector('.carousel__items');
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.carousel__item').length;

  function updateCarousel() {
      const offset = -currentIndex * 100; // Décalage en pourcentage
      carouselItems.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
      updateCarousel();
  });

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateCarousel();
  });

  updateCarousel(); // Initialisation
});
