<template>
  <div>
    <div class="search-items">
      <div class="search-bar">
        <img :src="searchIcon" alt="Search Icon" />
        <input class="input-search" type="text" placeholder="Lessons Name" />
        <img :src="vector" alt="Vector Icon" />
        <input class="input-search" type="text" placeholder="Tutor Name" />
        <button class="search-button">
          <img :src="lightSearchIcon" alt="Light Search Icon" />
          search
        </button>
      </div>
      <div class="select-wrapper">
        <button
          :style="filterButtonStyle"
          class="filter-btn Filter-responsive-btn"
          @click="toggleModal"
        >
          Filter
        </button>
        <select class="select-style placeholder">
          <option
            v-for="item in selectItems"
            :key="item.value"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <div class="container-filter-btn">
          <button
            v-for="btn in filterButtons"
            :key="btn.id"
            class="filter-btn"
            :class="{ active: activeButton === btn.id }"
            :style="btn.id === activeButton ? activeButtonStyle : {}"
            @click="toggleActiveButton(btn.id)"
          >
            {{ btn.text }}
          </button>
        </div>
      </div>
    </div>

    <div class="container-filter-btn non-modal-view">
      <button
        v-for="btn in filterButtons"
        :key="btn.id"
        class="filter-btn"
        :class="{ active: activeButton === btn.id }"
        :style="btn.id === activeButton ? activeButtonStyle : {}"
        @click="toggleActiveButton(btn.id)"
      >
        {{ btn.text }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.Filter-responsive-btn {
  display: none;
}

.search-items {
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-btn.active {
  background-color: #fb9c46;
  color: white;
}

.select-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.container-filter-btn {
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.non-modal-view {
  display: ruby-text;
  justify-content: center;
}

.placeholder,
input::placeholder {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #cccccc;
}
.filter-btn {
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.18);
  font-size: 14px;
  margin: 10px 15px;
  cursor: pointer;
  color: #979797;
}

.select-style {
  background-color: white;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  padding: 8px 15px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.18);
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  border: none;
  border-radius: 10px;
  padding: 8px 15px;
  margin: 10px;
  width: 780px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.18);
}

.input-search {
  border: none;
  outline: none;
  padding: 8px;
}

.search-button {
  background-color: #fb9c46;
  color: white;
  border: none;
  padding: 8px 16px;
  width: 220px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  gap: 10px;
  position: absolute;
  right: 15px;
}

button img {
  width: 21px;
  height: 21px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 10px;
  max-width: 90%;
  width: 500px;
}

@media (max-width: 850px) {
  .non-modal-view {
    display: none;
  }

  .Filter-responsive-btn {
    display: inline-block;
  }
  .search-button {
    display: none;
  }

  .modal-content {
    width: 80%;
  }

  .search-items {
    display: block;
  }
  .search-bar {
    width: auto;
    justify-content: center;
  }
  .input-search {
    width: 50%;
  }

  .select-style {
    width: 50%;
    margin: 10px 0;
  }
}
</style>

<script setup>
import { ref } from "vue";
import lightSearchIcon from "../assets/images/icons/light-searche-icon.svg";
import searchIcon from "../assets/images/icons/search-icon.svg";
import vector from "../assets/images/icons/vector.svg";

const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};

const activeButton = ref(null);
const toggleActiveButton = (buttonNumber) => {
  activeButton.value = buttonNumber;
};

const filterButtonStyle = {
  backgroundColor: "#fb9c46",
  color: "white",
  height: "50px",
  marginRight: "20px",
  width: "50%",
};

const activeButtonStyle = {
  backgroundColor: "#fb9c46",
  color: "white",
};

const filterButtons = [
  { id: 1, text: "Also speaks" },
  { id: 2, text: "From" },
  { id: 3, text: "Price" },
  { id: 4, text: "Native Speaker" },
  { id: 5, text: "Teacher types" },
  { id: 6, text: "Category" },
  { id: 7, text: "Instant lesson" },
  { id: 8, text: "Availability" },
  { id: 9, text: "Auto-accept" },
];

const selectItems = [
  { value: "popular-lesson", text: "Popular Lesson" },
  { value: "item1", text: "Item 1" },
  { value: "item2", text: "Item 2" },
];
</script>
