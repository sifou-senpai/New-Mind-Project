<template>
  <div>
    <div style="display: flex; gap: 25px; padding-left: 30px">
      <p
        v-for="(item, index) in tabs"
        :key="index"
        :style="index === activeTab ? activeStyle : defaultStyle"
        @click="activeTab = index"
      >
        {{ item }}
      </p>
    </div>
    <div class="cardProfile">
      <h1 style="font-size: 20px; font-weight: 600; line-height: 34px">
        About me
      </h1>
      <p
        style="
          font-size: 14px;
          font-weight: 400;
          line-height: 23.8px;
          color: #979797;
        "
      >
        I am an actor and a writer as well as an English teacher. I have
        appeared on TV and in short films. I love reading and watching TV and
        movies. One of my favorite movies is The Truman Show. I am also studying
        for a Masters degree in screenwriting...
        <span style="color: #fb9c46"> Read more</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: ["About", "Schedule", "Reviews", "Resume"],
    };
  },
  computed: {
    activeStyle() {
      return {
        color: "#fb9c46",
        borderBottom: "3px solid #fb9c46",
        paddingBottom: "5px",
        cursor: "pointer",
      };
    },
    defaultStyle() {
      return {
        fontSize: "16px",
        fontWeight: " 600",
        lineHeight: "24px",
        textAlign: "left",
        cursor: "pointer",
      };
    },
  },
};
</script>

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
@media (max-width: 1100px) {
  .cardProfile {
    margin: 15px 0 15px 0;
  }
}
</style>
