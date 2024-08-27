<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/formations">Formations</router-link>
      <router-link to="/sign-in">Sign In</router-link>
      <router-link to="/forgot-password">Forgot Password</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
// Import CSS files and external styles
import './assets/css/style.scss';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap.min.css';

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
