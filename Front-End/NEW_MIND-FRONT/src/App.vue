<template>
  <div>
    <Header />
    <About />
    <Formations />
    <Services />
    <HowWeWork />
    <Teachers />
    <Comments />
    <Contact />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Formations from './components/Formations.vue';
import Services from './components/Services.vue';
import HowWeWork from './components/HowWeWork.vue';
import Teachers from './components/Teachers.vue';
import Comments from './components/Comments.vue';
import Contact from './components/Contact.vue';

import './assets/css/style.scss';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootstrap.css';

// External CSS
function loadStyle(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

loadStyle('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
loadStyle('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');
loadStyle('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css');
loadStyle('https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap');

onMounted(() => {
  // Search Modal
  const searchButton = document.getElementById("searchButton");
  const searchModalElement = document.getElementById('search');
  const closeButton = document.getElementById('closeButton');

  if (searchButton && searchModalElement) {
    searchButton.addEventListener("click", () => {
      const searchModal = new bootstrap.Modal(searchModalElement);
      searchModal.show();
    });
  }

  if (closeButton && searchModalElement) {
    const modal = new bootstrap.Modal(searchModalElement);

    closeButton.addEventListener('click', () => {
      modal.hide();
    });

    searchModalElement.addEventListener('click', (event) => {
      if (event.target === searchModalElement) {
        modal.hide();
      }
    });
  }

  // Service Items Rotation
  const cards = document.querySelectorAll('.service-item');
  const prevButton = document.querySelector('.service-prev');
  const nextButton = document.querySelector('.service-next');
  let currentIndex = 1;

  const updateCards = () => {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      card.style.transform = `rotate(${(index - currentIndex) * 10}deg)`;
      card.style.opacity = index === currentIndex ? '1' : '0.6';
      card.style.zIndex = index === currentIndex ? '10' : '1';
    });
    cards[currentIndex].classList.add('active');
  };

  const nextCard = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  };

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCards();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', nextCard);
  }

  // Initialize and auto-rotate
  updateCards();
  setInterval(nextCard, 5000);

  // Background Color Change on Hover
  const serviceItems = document.querySelectorAll('.service-item');
  const serviceSection = document.querySelector('.service_section');

  if (serviceSection) {
    serviceItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        serviceSection.style.backgroundColor = 'var(--cold-red)';
      });

      item.addEventListener('mouseleave', () => {
        serviceSection.style.backgroundColor = 'var(--blue)';
      });
    });
  }
});
</script>
