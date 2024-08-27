<script setup>
import { ref } from "vue";
import CardComponent from "./reusible-components/Cards.vue";
import ProfileCard from "./reusible-components/DescriptionCard.vue";
import person from "../assets/images/home/person.webp";
import person1 from "../assets/images/home/person1.png";
import person2 from "../assets/images/home/person2.png";
import person3 from "../assets/images/home/person3.png";
import flag from "../assets/images/icons/Flag.svg";
import play from "../assets/images/icons/Play.svg";
import cardDescription from "../assets/images/home/profie-description.webp";
import cardDescription1 from "../assets/images/home/cardDescriprion1.png";
import cardDescription2 from "../assets/images/home/cardDescription2.png";
import cardDescription3 from "../assets/images/home/cardDescription3.png";
import PlayIcon from "../assets/images/icons/PlayIcon.svg";
import chinaFlag from "../assets/images/icons/chinaFlag.svg";
import germanyflag from "../assets/images/icons/germanyflag.svg";

const cards = [
  {
    component: CardComponent,
    props: {
      person,
      flag,
      play,
      lessons: 20,
      tutorName: "Brooklyn Simmons",
      rating: "4.9",
      tutorType: "Community Tutor",
      trialTime: "30 Min Trial",
      hourlyRate: "IDR - 485,730.10",
      minRate: "IDR - 85,730.10",
      studentCount: 120,
    },
  },
  {
    component: ProfileCard,
    props: {
      title: "Profile",
      subtitle: "Schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat aliquam integer sit mauris sit. Pellentesque urna, adipiscing at aliquam tempor non. Lectus bibendum sollicitudin aliquet id...",
      buttonText: "Learn More",
      buttonLink: "",
      profileImage: cardDescription,
      iconImage: PlayIcon,
    },
  },
  {
    component: CardComponent,
    props: {
      person: person1,
      flag: chinaFlag,
      play,
      lessons: 20,
      tutorName: "Brooklyn Simmons",
      rating: "4.9",
      tutorType: "Community Tutor",
      trialTime: "30 Min Trial",
      hourlyRate: "IDR - 485,730.10",
      minRate: "IDR - 85,730.10",
      studentCount: 120,
    },
  },
  {
    component: ProfileCard,
    props: {
      title: "Profile",
      subtitle: "Schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat aliquam integer sit mauris sit. Pellentesque urna, adipiscing at aliquam tempor non. Lectus bibendum sollicitudin aliquet id...",
      buttonText: "Learn More",
      buttonLink: "",
      profileImage: cardDescription1,
      iconImage: PlayIcon,
    },
  },
  {
    component: CardComponent,
    props: {
      person: person2,
      flag,
      play,
      lessons: 20,
      tutorName: "Brooklyn Simmons",
      rating: "4.9",
      tutorType: "Community Tutor",
      trialTime: "30 Min Trial",
      hourlyRate: "IDR - 485,730.10",
      minRate: "IDR - 85,730.10",
      studentCount: 120,
    },
  },
  {
    component: ProfileCard,
    props: {
      title: "Profile",
      subtitle: "Schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat aliquam integer sit mauris sit. Pellentesque urna, adipiscing at aliquam tempor non. Lectus bibendum sollicitudin aliquet id...",
      buttonText: "Learn More",
      buttonLink: "",
      profileImage: cardDescription2,
      iconImage: PlayIcon,
    },
  },
  {
    component: CardComponent,
    props: {
      person: person3,
      flag: germanyflag,
      play,
      lessons: 20,
      tutorName: "Brooklyn Simmons",
      rating: "4.9",
      tutorType: "Community Tutor",
      trialTime: "30 Min Trial",
      hourlyRate: "IDR - 485,730.10",
      minRate: "IDR - 85,730.10",
      studentCount: 120,
    },
  },
  {
    component: ProfileCard,
    props: {
      title: "Profile",
      subtitle: "Schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat aliquam integer sit mauris sit. Pellentesque urna, adipiscing at aliquam tempor non. Lectus bibendum sollicitudin aliquet id...",
      buttonText: "Learn More",
      buttonLink: "",
      profileImage: cardDescription3,
      iconImage: PlayIcon,
    },
  },
];

const visibleCount = ref(4);
const showMore = () => {
  visibleCount.value = cards.length;
};
</script>

<template>
  <div>
    <div class="FullContainer">
      <div class="cardsContainer">
        <component
          v-for="(card, index) in cards.slice(0, visibleCount)"
          :key="index"
          :is="card.component"
          v-bind="card.props"
        />
      </div>
    </div>
    <div class="buttonContainer">
      <button class="showMoreButton" @click="showMore">Show more</button>
    </div>
  </div>
</template>

<style scoped>
.cardsContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  padding: 20px;
}

.FullContainer {
  display: flex;
  justify-content: center;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.showMoreButton {
  width: 186px;
  height: 50px;
  padding: 10px;
  gap: 10px;
  border: none;
  border-radius: 10px;
  background-color: #fb9c46;
  color: white;
}

@media (max-width: 850px) {
  .cardsContainer {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
  }
}
</style>
