<template>
  <section class="py-10 sm:py-12 md:py-14 lg:py-28 px-0 md:px-28 xl:px-32">
    <h1
      class="font-bold text-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
    >
      {{ headline }}
    </h1>
    <p class="text-text text-sm md:text-md lg:text-lg pt-4 lg:pt-6">
      source:
      <a :href="link" target="_blank" class="font-bold underline custom-cursor">
        {{ source }}
      </a>
    </p>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: {
    headline: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursor-hover.svg"), pointer;
}
</style>
