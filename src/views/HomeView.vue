<template>
  <div class="bg-background min-h-screen flex flex-col">
    <main class="max-w-6xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12 flex-grow">
      <Navigation />

      <Banner
        headline="The world produces Food for 10 Billion People, Yet Millions go hungry."
        source="FAO"
        link="https://www.fao.org/cfs/resources/detail/en/c/1609703/"
      />

      <!-- Cards Section -->
      <div class="flex justify-center">
        <section
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-4"
        >
          <Card
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            :bgColor="card.bgColor"
            :link="card.link"
          />
        </section>
      </div>
    </main>

    <Footer
      :authorName="'Diogo Cardoso'"
      :linkedinUrl="'https://www.linkedin.com/in/diogo-cunha-cardoso-b37242213/'"
      :description="'Veganism is a way of living which seeks to exclude, as far as is possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose.'"
    />
  </div>
</template>

<script>
// Import Card and Navigation components
import Card from "../components/Card.vue";
import Navigation from "../components/Navigation.vue";
import Banner from "../components/Banner.vue";
import Footer from "../components/Footer.vue";

import VeganCalculatorImage from "../assets/vegan-calculator.svg";
import VeganFactsImage from "../assets/vegan-facts.svg";
import AnimalKillCountImage from "../assets/animal-kill-count.svg";

export default {
  name: "HomeView",
  components: {
    Card,
    Navigation,
    Banner,
    Footer,
  },
  data() {
    return {
      cards: [
        {
          title: "Vegan Calculator",
          description:
            "Track your impact: see animals saved, CO2 reduced, and resources conserved.",
          icon: VeganCalculatorImage,
          bgColor: "bg-foreground-dark",
          link: "/vegan-calculator",
        },
        {
          title: "Vegan Facts",
          description:
            "Discover veganism, animal, and environmental facts to inspire change.",
          icon: VeganFactsImage,
          bgColor: "bg-foreground-medium",
          link: "/vegan-facts",
        },
        {
          title: "Animal Kill Count",
          description:
            "Real-time counter showing animals killed for food every second globally.",
          icon: AnimalKillCountImage,
          bgColor: "bg-foreground-light",
          link: "/animal-kill-count",
        },
      ],
    };
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursor-hover.svg"), pointer;
}
</style>
