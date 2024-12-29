<template>
  <footer
    class="bg-background py-6 px-4 sm:px-8 lg:px-12 mt-6 md:mt-8 lg:mt-12"
  >
    <div class="flex justify-center lg:justify-between items-center">
      <p class="text-text text-xs">
        made by:
        <a
          :href="linkedinUrl"
          target="_blank"
          class="font-bold underline custom-cursor"
        >
          {{ author }}
        </a>
      </p>
      <p class="text-subtext text-xs lg:text-xs w-80 lg:block hidden">
        {{ description }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      author: "Diogo Cardoso",
      linkedinUrl: "https://www.linkedin.com/in/diogo-cunha-cardoso-b37242213/",
      description:
        "Veganism is a way of living which seeks to exclude, as far as is possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose.",
    };
  },
};
</script>

<style scoped>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
