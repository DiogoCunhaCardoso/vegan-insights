<template>
  <RouterLink
    :class="[bgColor]"
    :to="{ name: pageName }"
    class="custom-cursor p-6 md:p-7 rounded-3xl max-w-72 hover:scale-[1.02] hover:shadow-xl duration-300 transition"
  >
    <img
      :src="icon"
      :alt="`Icon: ${title}`"
      class="aspect-square w-10 md:w-12 mb-4"
    />

    <span class="flex flex-col gap-2 lg:gap-4">
      <h2 class="font-bold text-text lg:text-[28px] glow-text">
        {{ title }}
      </h2>
      <p class="text-subtext lg:text-lg">
        {{ description }}
      </p>
    </span>
  </RouterLink>
</template>

<script setup>
import DefaultLogo from "@/assets/logo.svg";

// Props definition
defineProps({
  icon: {
    type: String,
    default: DefaultLogo,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
});
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
