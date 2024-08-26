<script setup>
import Profile from "./components/Profile.vue";
import AboutMe from "./components/AboutMe.vue";
import Schedule from "./components//Schedule.vue";
import Review from "./components/Review.vue";
import Resume from "./components/Resume.vue";
import ProfileDescription from "./components//ProfileDescription.vue";
</script>
<template>
  <div class="container">
    <div class="main-content">
      <Profile />
      <AboutMe />
      <Schedule />
      <Review />
      <Resume />
    </div>
    <ProfileDescription class="profile-description" />
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.main-content {
  width: 650px;
}

@media (max-width: 1100px) {
  .container {
    align-items: center;
  }

  .main-content {
    width: auto;
  }

  ProfileDescription {
    display: block;
    width: 100%;
  }
  .profile-description {
    width: 100%;
  }
}
</style>
