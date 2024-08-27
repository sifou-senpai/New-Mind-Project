<script setup>
import { ref, computed } from "vue";

const activeTab = ref(0);
const tabs = ["Education", "Certifications"];

const activeStyle = computed(() => ({
  color: "#fb9c46",
  borderBottom: "3px solid #fb9c46",
  paddingBottom: "5px",
  cursor: "pointer",
}));

const defaultStyle = computed(() => ({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  textAlign: "left",
  cursor: "pointer",
}));

const expanded = ref(false);

const toggleDropdown = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <div class="cardProfile">
    <h1 style="font-size: 20px; font-weight: 600; line-height: 34px">Resume</h1>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      "
    >
      <p
        v-for="(item, index) in tabs"
        :key="index"
        :style="index === activeTab ? activeStyle : defaultStyle"
        @click="
          () => {
            if (item === 'Education') {
              expanded.value = !expanded.value;
            } else {
              expanded.value = false;
            }
            activeTab.value = index;
          }
        "
      >
        {{ item }}
      </p>
      <template v-if="activeTab === 0 && !expanded">
        <p :style="defaultStyle">Work experience</p>
        <p :style="defaultStyle">Year</p>
      </template>
    </div>
    <div v-if="expanded && activeTab === 0" class="dropdown">
      <p>Work experience</p>
      <p>Certifications</p>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      "
    >
      <p>Sunderland BSc Hons</p>
      <p>1993-1996</p>
    </div>
  </div>
</template>

<style scoped>
.cardProfile {
  overflow-y: hidden;
  height: auto;
  width: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.183);
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin: 30px;
}

.dropdown {
  margin-top: 10px;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
}

@media (max-width: 1100px) {
  .cardProfile {
    margin: 30px 0 3px 0;
  }

  .dropdown p {
    display: block;
  }

  .cardProfile div > p:nth-child(2),
  .cardProfile div > p:nth-child(3) {
    display: none;
  }
}

@media (min-width: 1100px) {
  .dropdown p {
    display: none;
  }
}
</style>
