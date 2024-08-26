<script setup>
import { defineProps } from "vue";
import cardDescription from "../../assets/images/home/profie-description.webp";
import PlayIcon from "../../assets/images/icons/PlayIcon.svg";

const props = defineProps({
  profileImage: String,
  iconImage: String,
  title: String,
  subtitle: String,
  description: String,
  buttonText: String,
  buttonLink: String,
});
</script>

<template>
  <div class="cardContent">
    <div
      style="
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        gap: 10px;
      "
    >
      <p
        style="
          color: #fb9c46;
          border-bottom: 3px solid #fb9c46;
          padding-bottom: 5px;
        "
      >
        {{ title }}
      </p>
      <p style="color: #979797">{{ subtitle }}</p>
    </div>

    <div style="position: relative; width: 350px; margin: 0 auto">
      <img style="width: 100%" :src="profileImage" alt="" />
      <img
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
        :src="iconImage"
        alt="Play Icon"
      />
    </div>

    <p
      style="
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 10px;
      "
    >
      Description
    </p>
    <p
      style="
        font-size: 14px;
        font-weight: 400;
        line-height: 23.8px;
        color: #979797;
      "
    >
      {{ description }}
    </p>
    <div style="text-align: right">
      <button
        style="
          display: inline-block;
          width: 108.58px;
          border-radius: 8px;
          border: none;
          font-size: 14px;
          background-color: #058e6e;
          color: white;
          text-align: center;
          line-height: 40px;
          margin-bottom: 10px;
          margin-top: 25px;
          text-decoration: none;
        "
      >
        <a href="/profile" style="text-decoration: none; color: white">
          {{ buttonText }}</a
        >
      </button>
    </div>
  </div>
</template>
