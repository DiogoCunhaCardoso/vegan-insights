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
          {{ authorName }}
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
  name: "Footer",
  props: {
    authorName: {
      type: String,
      required: true,
    },
    linkedinUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-cursor:hover {
  cursor: url("../assets/cursor-hover.svg"), pointer;
}
</style>
