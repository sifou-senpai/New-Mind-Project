<script setup>
import person1 from "../../../assets/images/home/person1.png";
import stars from "../../../assets/images/icons/stars.svg";
import play from "../../../assets/images/icons/Play.svg";
import heart from "../../../assets/images/icons/Heart.svg";
import chart from "../../../assets/images/icons/Chart.svg";
import feather_share from "../../../assets/images/icons/feather_share.svg";
import profile from "../../../assets/images/icons/Profile.svg";
</script>

<template>
  <div class="cardProfile">
    <div class="ProfileContainer">
      <img class="imgProfile" :src="person1" alt="" />
      <div style="margin-left: 10px; flex-grow: 1">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <p style="font-size: 20px; font-weight: 600; line-height: 34px">
            Theresa Webb
          </p>
          <p
            style="
              font-size: 14px;
              font-weight: 400;
              line-height: 23.8px;
              color: #979797;
            "
          >
            Offline
          </p>
        </div>
        <div
          style="
            display: flex;
            font-size: 14px;
            font-weight: 400;
            line-height: 23.8px;
            color: #979797;
          "
        >
          <p>Theresa Webb</p>
          <p style="margin-left: auto">Offline</p>
        </div>
        <img style="margin-top: 15px" :src="stars" alt="" />
        <p style="font-size: 20px; font-weight: 600; line-height: 34px">From</p>
        <p
          style="
            display: flex;
            font-size: 14px;
            font-weight: 400;
            line-height: 23.8px;
            color: #979797;
          "
        >
          China
        </p>
        <p style="font-size: 20px; font-weight: 600; line-height: 34px">
          Teach
        </p>
        <p
          style="
            display: flex;
            font-size: 14px;
            font-weight: 400;
            line-height: 23.8px;
            color: #979797;
          "
        >
          English -
          <span style="color: #fb9c46; margin-left: 5px"> Native</span>
        </p>
        <p style="font-size: 20px; font-weight: 600; line-height: 34px">
          Also Speak
        </p>
        <p
          style="
            display: flex;
            font-size: 14px;
            font-weight: 400;
            line-height: 23.8px;
            color: #979797;
          "
        >
          Spanish -
          <span style="color: #fb9c46; margin-left: 5px"> Native</span>
        </p>
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        line-height: 35px;
      "
    >
      <div style="display: flex">
        <img :src="play" alt="" />
        <p style="font-size: 14px">20 Lessons</p>
        <img style="margin-left: 5px" :src="profile" alt="" />
        <p style="color: #fb9c46; font-size: 14px">120 Students</p>
      </div>

      <div style="display: flex; gap: 10px">
        <img :src="feather_share" alt="" />
        <img :src="heart" alt="" />
        <img :src="chart" alt="" />
      </div>
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
.ProfileContainer {
  display: flex;
}
.imgProfile {
  width: 320px;
}
@media (max-width: 1100px) {
  .ProfileContainer {
    display: block;
  }
  .imgProfile {
    width: 100%;
  }
  .cardProfile {
    margin: 15px 0 15px 0;
    padding: 10px;
  }
}
</style>
