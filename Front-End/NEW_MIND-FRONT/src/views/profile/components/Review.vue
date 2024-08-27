<script setup>
import fullRectangle from "../../../assets/images/icons/full-recangle.svg";
import emptyRectangle from "../../../assets/images/icons/empty-recangle.svg";
import stars from "../../../assets/images/icons/stars.svg";
import arrow from "../../../assets/images/icons/arrow.svg";
import photo from "../../../assets/images/home/Photo.svg";
</script>

<template>
  <div class="cardProfile">
    <h1 style="font-size: 20px; font-weight: 600; line-height: 34px">Review</h1>
    <hr class="horizontal-border" />

    <div class="review-container">
      <div class="review-summary">
        <h1>5</h1>
        <img :src="stars" alt="stars" />
        <h2>2 reviews</h2>
      </div>

      <div class="rating-details">
        <div class="rating-row">
          <p>5 Stars</p>
          <img class="score" :src="fullRectangle" alt="full rectangle" />
          <p>(2)</p>
        </div>
        <div class="rating-row">
          <p>4 Stars</p>
          <img class="score" :src="emptyRectangle" alt="empty rectangle" />
          <p>(0)</p>
        </div>
        <div class="rating-row">
          <p>3 Stars</p>
          <img class="score" :src="emptyRectangle" alt="empty rectangle" />
          <p>(0)</p>
        </div>
        <div class="rating-row">
          <p>2 Stars</p>
          <img class="score" :src="emptyRectangle" alt="empty rectangle" />
          <p>(0)</p>
        </div>
        <div class="rating-row">
          <p>1 Star</p>
          <img class="score" :src="emptyRectangle" alt="empty rectangle" />
          <p>(0)</p>
        </div>
      </div>
    </div>
    <hr class="horizontal-border" />
    <div style="display: flex; justify-content: left; align-items: flex-start">
      <img :src="photo" alt="" />
      <div>
        <p>Jaquon Hart</p>
        <img :src="stars" alt="" />
        <p>
          very understanding, patient and will help you improve your English. I
          highly recommend this teacher.
        </p>
      </div>
    </div>
    <p
      style="
        display: flex;
        justify-content: right;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        color: #979797;
      "
    >
      Posted on July 1, 2021
    </p>
    <button
      style="
        display: flex;
        justify-content: center;
        width: 250px;
        height: 51px;
        border-radius: 5px;
        border: 1px;
        cursor: pointer;
        color: white;
        background-color: #fb9c46;
        margin: 20px auto 0 auto;
        align-items: center;
        align-self: center;
        gap: 10px;
      "
    >
      Show more reviews
      <img :src="arrow" alt="" />
    </button>
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

.horizontal-border {
  margin: 10px 0;
  border: 0;
  border-top: 1px solid #ccc;
}

.review-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.rating-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-row {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
@media (max-width: 1100px) {
  .cardProfile {
    margin: 15px 0 15px 0;
  }
  .review-container {
    display: block;
  }
  .score {
    width: 190px;
  }
}
</style>
