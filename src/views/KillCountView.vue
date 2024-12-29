<template>
  <div>
    <Hero
      heading="150 BILLION animals are slaughtered every year..."
      source="ADAPTT"
      link="https://www.adaptt.org/about/the-kill-counter.html"
    />

    <p
      class="text-subtext max-w-3xl mt-12 md:mt-16 lg:mt-20 text-sm md:text-base"
    >
      These are the numbers of animals killed worldwide by the meat, egg, and
      dairy industries since you opened this page. They do not include the
      millions of animals killed in laboratories, fur farms, animal shelters,
      zoos, marine parks, rodeos, circuses, human negligence, blood sports, or
      extermination attempts. (The study was in 2003, one may guess the numbers
      are even higher)
    </p>

    <p
      class="text-text text-center mt-12 md:mt-16 lg:mt-20 text-base md:text-lg"
    >
      You have opened this page <b>{{ hours }}</b> hours
      <b>{{ minutes }}</b> minutes and <b>{{ seconds }}</b> seconds ago
    </p>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 md:mt-16 lg:mt-20"
    >
      <AnimalKillCard
        v-for="animal in animals"
        :key="animal.name"
        :name="animal.name"
        :image="animal.image"
        :count="formatNumber(animal.count)"
      />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import AnimalKillCard from "@/components/AnimalKillCard.vue";
import { useWebsiteStore } from "@/stores/website";

export default {
  components: {
    Hero,
    AnimalKillCard,
  },

  computed: {
    animals() {
      return this.store.getAnimals;
    },
    elapsedTime() {
      return this.store.getElapsedTime;
    },
    hours() {
      return Math.floor(this.elapsedTime / (1000 * 60 * 60));
    },
    minutes() {
      return Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.elapsedTime % (1000 * 60)) / 1000);
    },
  },

  methods: {
    formatNumber(number) {
      // Round the number to the nearest integer, then format it with commas
      return Math.round(number).toLocaleString().replace(/,/g, " ");
    },
  },

  mounted() {
    this.store.initializeStartTime(); // Ensure start time is set
    this.intervalId = setInterval(() => {
      this.store.updateElapsedTime(); // Update elapsed time
      this.store.incrementAnimalCounts(); // Update animal counts
    }, 50);
  },

  beforeDestroy() {
    clearInterval(this.intervalId); // Clean up the interval when the component is destroyed
  },

  data() {
    return {
      store: useWebsiteStore(),
    };
  },
};
</script>
