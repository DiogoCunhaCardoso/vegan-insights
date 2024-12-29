<template>
  <Hero
    heading="The world produces Food for 10 Billion People, Yet Millions go hungry."
    source="FAO"
    link="https://www.fao.org/cfs/resources/detail/en/c/1609703/"
  />

  <div class="flex justify-center">
    <div
      class="pt-10 sm:pt-12 md:pt-14 lg:pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
    >
      <TransitionGroup name="slide-fade">
        <NavigationCard
          v-for="(card, index) in navigationCards"
          :key="card.title"
          :title="card.title"
          :description="card.description"
          :icon="card.icon"
          :bgColor="card.bgColor"
          :pageName="card.pageName"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import { useWebsiteStore } from "@/stores/website";

export default {
  components: {
    Hero,
    NavigationCard,
  },

  data() {
    return {
      store: useWebsiteStore(),
    };
  },

  computed: {
    navigationCards() {
      return this.store.getNavigationCards;
    },
  },

  onMounted() {
    this.$nextTick(() => {
      const cards = document.querySelectorAll(".slide-fade-enter-active");
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.5}s`;
      });
    });
  },
};
</script>

<style>
/* Transition effect for sliding up */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
  position: relative;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(40px); /* Slide up effect (coming from below) */
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
