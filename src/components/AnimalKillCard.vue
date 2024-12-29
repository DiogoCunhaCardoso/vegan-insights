<template>
  <div class="flex flex-col items-center">
    <img
      :src="image"
      :alt="`${name} illustration`"
      class="w-10 h-10 lg:w-12 lg:h-12 mb-2"
    />
    <p class="text-subtext mb-4">{{ name }}</p>
    <p class="text-text font-semibold text-xl">{{ count }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>
