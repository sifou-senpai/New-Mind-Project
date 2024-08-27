<script setup>
import { ref, computed } from "vue";
import rightwhite from "../../../assets/images/icons/buttons/rightwhite.svg";
import rightgrey from "../../../assets/images/icons/buttons/rightgrey.svg";
import leftwhite from "../../../assets/images/icons/buttons/leftwhite.svg";
import leftgrey from "../../../assets/images/icons/buttons/leftgrey.svg";

const currentDate = ref(new Date());
const currentWeek = ref(0);

const getWeeksInMonth = () => {
  const weeks = [];
  const startOfMonth = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    1
  );
  let startOfWeek = startOfMonth;

  while (startOfWeek.getMonth() === currentDate.value.getMonth()) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      if (day.getMonth() === currentDate.value.getMonth()) {
        week.push(day);
      } else {
        week.push(null);
      }
    }
    weeks.push(week);
    startOfWeek.setDate(startOfWeek.getDate() + 7);
  }

  return weeks;
};

const showFullSchedule = ref(false);

const getHours = () => {
  if (showFullSchedule.value) {
    return [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
    ];
  } else {
    return ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"];
  }
};

const toggleSchedule = () => {
  showFullSchedule.value = !showFullSchedule.value;
};

const formattedDates = computed(() => {
  const weeks = getWeeksInMonth();
  return weeks[currentWeek.value].map((date) => {
    if (date) {
      const day = date.getDate();
      const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
      return { dayOfWeek, day, show: true };
    } else {
      return { dayOfWeek: "", day: "", show: false };
    }
  });
});

const nextWeek = () => {
  const weeks = getWeeksInMonth();
  if (currentWeek.value < weeks.length - 1) {
    currentWeek.value += 1;
  } else {
    changeMonth(1);
  }
};

const previousWeek = () => {
  if (currentWeek.value > 0) {
    currentWeek.value -= 1;
  } else {
    changeMonth(-1);
    const weeks = getWeeksInMonth();
    currentWeek.value = weeks.length - 1;
  }
};

const changeMonth = (direction) => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + direction);
  currentDate.value = newDate;
  currentWeek.value = 0;
};

const isPreviousWeekActive = computed(() => currentWeek.value > 0);
const isNextWeekActive = computed(
  () => currentWeek.value < getWeeksInMonth().length - 1
);
</script>

<template>
  <div class="calendarStyle">
    <h1 class="title">Schedule</h1>
    <hr class="horizontal-border" />
    <div class="scheduleContainer">
      <div class="navigationButtons">
        <button
          :class="{
            active: isPreviousWeekActive,
            inactive: !isPreviousWeekActive,
          }"
          @click="previousWeek"
        >
          <img :src="isPreviousWeekActive ? leftwhite : leftgrey" alt="" />
        </button>
        <button
          :class="{ active: isNextWeekActive, inactive: !isNextWeekActive }"
          @click="nextWeek"
        >
          <img :src="isNextWeekActive ? rightwhite : rightgrey" alt="" />
        </button>
      </div>
      <p class="currentMonth">
        {{
          currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })
        }}
      </p>
      <select
        style="
          font-size: 18px;
          font-weight: 400;
          line-height: 30.6px;
          height: 40px;
          color: #393939;
          border: 1px solid #c4c4c4;
          padding: 5px;
        "
      >
        <option>Jakarta GMT +7:00</option>
      </select>
    </div>
    <div class="containerDays">
      <div v-for="(date, index) in formattedDates" :key="index" class="days">
        <template v-if="date.show">
          <hr />
          <label class="dayOfWeek">{{ date.dayOfWeek }}</label>
          <button class="dayButton">{{ date.day }}</button>
          <p v-for="hour in getHours()" :key="hour">{{ hour }}</p>
        </template>
      </div>
    </div>
    <button class="toggleButton" @click="toggleSchedule">
      {{ showFullSchedule ? "Show Less" : "View full schedule" }}
    </button>
  </div>
</template>

<style scoped>
.calendarStyle {
  overflow-y: hidden;
  height: auto;
  width: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.183);
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin: 0px 30px 30px 30px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
}

.scheduleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.horizontal-border {
  margin: 10px 0;
  border: 0;
  border-top: 1px solid #ccc;
}

.navigationButtons {
  display: flex;
  align-items: center;
}

.navigationButtons button {
  margin: 0 5px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigationButtons button.active {
  background-color: #c4c4c4;
}

.navigationButtons button.inactive {
  background-color: white;
  border: 1px solid #c4c4c4;
}

.navigationButtons img {
  width: 20px;
  height: 20px;
}

.currentMonth {
  color: #393939;
}

.containerDays {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}

.days {
  display: grid;
  justify-items: center;
  position: relative;
}

.days:hover hr {
  background-color: #fb9c46;
}

.days hr {
  width: 40px;
  height: 4px;
  margin-bottom: 15px;
  background-color: #c4c4c4;
  border: none;
  position: absolute;
}

.dayOfWeek {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 10px;
}

.dayButton {
  width: 30px;
  cursor: pointer;
  color: white;
  background-color: #c4c4c4;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
}

.dayButton:hover {
  background-color: #fb9c46;
}

.hour {
  font-size: 14px;
  color: #666;
}

.toggleButton {
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
}

@media (max-width: 1100px) {
  .calendarStyle {
    margin: 15px 0 30px 0;
  }
  .scheduleContainer {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .containerDays {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: center;
    padding: 10px;
  }
  .days {
    margin-bottom: 20px;
  }
}
</style
