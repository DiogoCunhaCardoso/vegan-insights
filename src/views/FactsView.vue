<template>
  <div class="flex flex-col items-end gap-12">
    <div
      class="h-fit bg-foreground-dark p-6 lg:p-8 rounded-lg min-h-[410px] md:min-h-[476px]"
    >
      <Hero
        :heading="currentFact.text"
        :source="currentFact.sourceName"
        :link="currentFact.sourceLink"
      />
    </div>
    <button
      @click="fetchRandomFact"
      class="custom-cursor bg-[#fc81b2] text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-accent-dark transition duration-300"
    >
      Show Another Fact
    </button>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import { useWebsiteStore } from "@/stores/website";

export default {
  components: {
    Hero,
  },

  data() {
    return {
      store: useWebsiteStore(),
      currentFact: null,
    };
  },

  methods: {
    fetchRandomFact() {
      this.currentFact = this.store.getRandomFact();
    },
  },

  created() {
    this.fetchRandomFact();
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
