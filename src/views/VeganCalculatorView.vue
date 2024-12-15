<template>
  <div class="bg-background min-h-screen">
    <main class="max-w-6xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
      <Navigation :isActive="currentActive" />

      <Banner
        headline="Everyday a vegan saves:
                  1 animal life, 4.164 liters of water
                  18 kg of grain, 3 m² of forest land
                  9 kg C0₂"
        source="Trust me"
        link="https://www.fao.org/cfs/resources/detail/en/c/1609703/"
      />
    </main>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Banner from "../components/Banner.vue";

export default {
  name: "VeganCalculator",
  components: {
    Navigation,
    Banner,
  },
  data() {
    return {
      currentActive: 1,
    };
  },
};
</script>
