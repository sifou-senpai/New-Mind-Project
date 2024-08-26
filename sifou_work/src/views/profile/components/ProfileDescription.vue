<script setup>
import { ref } from "vue";
import cardDescriprion1 from "../../../assets/images/home/cardDescriprion1.png";
import PlayIcon from "../../../assets/images/icons/PlayIcon.svg";
import Heart from "../../../assets/images/icons/buttons/Heart.png";
import HeartLight from "../../../assets/images/icons/buttons/Heart-light.png";
import Message from "../../../assets/images/icons/buttons/Message.png";
import MessageLight from "../../../assets/images/icons/buttons/Message-light.png";
import work from "../../../assets/images/icons/buttons/work.png";
import workLight from "../../../assets/images/icons/buttons/work-light.png";
import shape from "../../../assets/images/icons/buttons/shape.png";
import shapeLight from "../../../assets/images/icons/buttons/shape-light.png";

const activeButton = ref(null);

// Define a function to get the correct icon based on the button state
const getIcon = (buttonName) => {
  switch (buttonName) {
    case "message":
      return activeButton.value === "message" ? MessageLight : Message;
    case "shape":
      return activeButton.value === "shape" ? shapeLight : shape;
    case "work":
      return activeButton.value === "work" ? workLight : work;
    case "heart":
      return activeButton.value === "heart" ? HeartLight : Heart;
    default:
      return Heart;
  }
};

const handleClick = (buttonName) => {
  activeButton.value = activeButton.value === buttonName ? null : buttonName;
};
</script>

<template>
  <div class="cardContent">
    <div style="position: relative; width: 350px; margin: 0 auto">
      <img style="width: 100%" :src="cardDescriprion1" alt="" />
      <img
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
        :src="PlayIcon"
        alt="Play Icon"
      />
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;
        line-height: 23.8px;
        margin-top: 20px;
      "
    >
      <p>30 Min Trial</p>
      <p>Hourly Rate From</p>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        line-height: 23.8px;
        color: #979997;
      "
    >
      <p>IDR - 85,730.10</p>
      <p>IDR - 485,730.10</p>
    </div>
    <div style="display: grid; gap: 15px; margin-top: 10px">
      <button
        class="btn"
        :class="{ active: activeButton === 'message' }"
        @click="handleClick('message')"
      >
        <img :src="getIcon('message')" alt="" />Send Message
      </button>
      <button
        class="btn"
        :class="{ active: activeButton === 'shape' }"
        @click="handleClick('shape')"
      >
        <img :src="getIcon('shape')" alt="" />Book Trial Lesson
      </button>
      <button
        class="btn"
        :class="{ active: activeButton === 'work' }"
        @click="handleClick('work')"
      >
        <img :src="getIcon('work')" alt="" />Book Private
      </button>
      <button
        class="btn"
        :class="{ active: activeButton === 'heart' }"
        @click="handleClick('heart')"
      >
        <img :src="getIcon('heart')" alt="" />Book Private
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 7px;
  border: 1px solid #058e6e;
  color: #058e6e;
  font-size: 14px;
  font-weight: 600;
  line-height: 23.8px;
  background-color: white;
  cursor: pointer;
}

.btn.active {
  background-color: #058e6e;
  color: white;
}
</style>
