<template>
  <div class="bg-background min-h-screen">
    <main class="max-w-6xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
      <Navigation :isActive="currentActive" />

      <Banner
        headline="150 BILLION animals are slaughtered every year..."
        source="FAO"
        link="https://www.fao.org/cfs/resources/detail/en/c/1609703/"
      />
      <div class="flex justify-center">
        <p class="text-subtext max-w-[600px]">
          These are the numbers of animals killed worldwide by the meat, egg,
          and dairy industries since you opened this page. They do not include
          the millions of animals killed in laboratories, fur farms, animal
          shelters, zoos, marine parks, rodeos, circuses, human negligence,
          blood sports, or extermination attempts.
        </p>
      </div>
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
      currentActive: 3,
    };
  },
};
</script>
