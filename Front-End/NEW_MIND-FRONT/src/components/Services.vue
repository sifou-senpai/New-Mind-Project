<template>
  <!-- service section -->
  <div class="service_section layout_padding">
    <div class="container-xxl py-5">
      <div class="heading_container">
        <h2>Our Services</h2>
        <p>Access top-notch services and book appointments effortlessly.</p>
      </div>

      <div class="container px-lg-5">
        <div class="service-slider">
          <div class="service-item" data-index="0">
            <div class="service-icon">
              <i class="fa fa-home fa-2x"></i>
            </div>
            <h5>Service 1</h5>
            <p>bio</p>
            <a class="btn px-3 mt-auto mx-auto" href="#">Read More</a>
          </div>
          <div class="service-item" data-index="1">
            <div class="service-icon">
              <i class="fa fa-home fa-2x"></i>
            </div>
            <h5>Service 2</h5>
            <p>bio</p>
            <a class="btn px-3 mt-auto mx-auto" href="#">Read More</a>
          </div>
          <div class="service-item" data-index="2">
            <div class="service-icon">
              <i class="fa fa-home fa-2x"></i>
            </div>
            <h5>Service 3</h5>
            <p>bio</p>
            <a class="btn px-3 mt-auto mx-auto" href="#">Read More</a>
          </div>
        </div>
        <div class="service-controls">
          <button class="service-prev">◄</button>
          <button class="service-next">►</button>
        </div>
      </div>
    </div>
  </div>
  <!-- service section end -->
</template>

<script setup>
import { onMounted } from 'vue';

const updateCards = () => {
  const cards = document.querySelectorAll('.service-item');
  const prevButton = document.querySelector('.service-prev');
  const nextButton = document.querySelector('.service-next');
  let currentIndex = 1;

  const applyRotation = () => {
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
    applyRotation();
  };

  prevButton?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    applyRotation();
  });

  nextButton?.addEventListener('click', () => {
    nextCard();
  });

  // Initialize and auto-rotate
  applyRotation();
  setInterval(nextCard, 5000);

  // Background Color Change on Hover
  const serviceItems = document.querySelectorAll('.service-item');
  const serviceSection = document.querySelector('.service_section');

  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      serviceSection.style.backgroundColor = 'var(--cold-red)';
    });

    item.addEventListener('mouseleave', () => {
      serviceSection.style.backgroundColor = 'var(--blue)';
    });
  });
};

onMounted(() => {
  updateCards();
});
</script>
