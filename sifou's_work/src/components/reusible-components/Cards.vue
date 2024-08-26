<script setup>
import starts from "../../assets/images/icons/stars.svg";
import vetor from "../../assets/images/icons/vector.svg";
import profile from "../../assets/images/icons/Profile.svg";
defineProps({
  person: String,
  flag: String,
  play: String,
  lessons: Number,
  tutorName: String,
  rating: String,
  tutorType: String,
  trialTime: String,
  hourlyRate: String,
  minRate: String,
  studentCount: Number,
});
</script>

<template>
  <div class="cardContent">
    <div class="image-container">
      <img :src="person" alt="person" class="person-image" />
      <img :src="flag" alt="flag" class="flag-image" />
    </div>
    <div class="Flex-classes-items">
      <img :src="play" alt="play icon" />
      <p style="font-size: 14px; font-weight: 500; line-height: 23.8px">
        {{ lessons }} Lessons
      </p>
    </div>
    <div class="Flex-classes">
      <p style="font-size: 20px; font-weight: 600; line-height: 34px">
        {{ tutorName }}
      </p>
      <p style="font-size: 14px; font-weight: 400; line-height: 23.8px">
        {{ rating }} Rating
      </p>
    </div>
    <div class="Flex-classes">
      <p
        style="
          font-size: 14px;
          font-weight: 400;
          line-height: 23.8px;
          color: #979797;
        "
      >
        {{ tutorType }}
      </p>
      <img :src="starts" alt="" />
    </div>
    <div>
      <p style="font-size: 16px; font-weight: 600">Speaks</p>
      <p
        style="
          display: flex;
          font-size: 14px;
          font-weight: 400;
          line-height: 23.8px;
          color: #979797;
        "
      >
        English-
        <span style="color: #fb9c46">Native <img :src="vector" alt="" /> </span
        >Spanish-
        <span style="color: #fb9c46">Spanish</span>
      </p>
    </div>
    <div
      class="Flex-classes"
      style="font-size: 14px; font-weight: 600; line-height: 23.8px"
    >
      <p>{{ trialTime }}</p>
      <p>Hourly Rate From</p>
    </div>
    <div
      class="Flex-classes"
      style="
        font-size: 14px;
        font-weight: 400;
        line-height: 23.8px;
        color: #979797;
      "
    >
      <p>{{ minRate }}</p>
      <p>{{ hourlyRate }}</p>
    </div>
    <div class="Flex-classes" style="margin-top: 25px">
      <p
        style="font-size: 16px; font-weight: 600; color: #fb9c46; display: flex"
      >
        <img style="height: 20px" :src="profile" alt="" />
        {{ studentCount }} Students
      </p>
      <button
        style="
          width: 108.58px;
          height: 40.13px;
          top: 857px;
          left: 516px;
          border-radius: 8px;
          border: none;
          font-size: 14px;
          background-color: #058e6e;
          color: white;
        "
      >
        <a href="/profile" style="text-decoration: none; color: white"> Book</a>
      </button>
    </div>
  </div>
</template>

<style scoped>
.Flex-classes {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.Flex-classes-items {
  display: flex;
  margin-top: 10px;
}

.image-container {
  position: relative;
}

.person-image {
  width: 100%;
  border-radius: 10px;
}

.flag-image {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 40px;
}
</style>
