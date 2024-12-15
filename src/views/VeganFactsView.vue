<template>
  <div class="bg-background min-h-screen">
    <main class="max-w-6xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
      <Navigation :isActive="currentActive" />
    </main>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "VeganCalculator",
  components: {
    Navigation,
  },
  data() {
    return {
      currentActive: 2,
    };
  },
};
</script>
