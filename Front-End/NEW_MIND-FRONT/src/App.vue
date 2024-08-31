<template>
  <div>
    <Header />
    <About />
    <Formations />
    <Services />
    <HowWeWork />
    <Comments />
    <Teachers />
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
import Comments from './components/Comments.vue';
import Teachers from './components/Teachers.vue';
import Contact from './components/Contact.vue';

import './assets/css/style.scss';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap.min.css';

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
loadStyle('https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css');

</script>