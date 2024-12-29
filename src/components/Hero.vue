<template>
  <section class="flex justify-center">
    <div class="md:max-w-2xl xl:max-w-3xl">
      <h1
        class="font-bold text-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {{ heading }}
      </h1>
      <p class="text-subtext text-sm md:text-md lg:text-lg pt-4 lg:pt-6">
        source:
        <a
          :href="link"
          target="_blank"
          class="font-bold underline custom-cursor"
        >
          {{ source }}
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
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

<!--  -->

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
