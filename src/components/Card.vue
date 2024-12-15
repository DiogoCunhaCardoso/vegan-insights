<template>
  <div
    class="relative rounded-3xl overflow-hidden max-w-72 custom-cursor"
    @click="navigate"
  >
    <div
      :class="[bgColor]"
      class="p-6 rounded-3xl transition-transform hover:scale-[1.02] ease-in-out transform duration-700"
    >
      <img :src="icon" alt="icon" class="w-12 h-12 mb-4 lg:mb-6" />

      <span class="flex flex-col gap-1 lg:gap-4">
        <h2 class="font-bold text-text lg:text-[28px] glow-text">
          {{ title }}
        </h2>
        <p class="text-subtext lg:text-lg">
          {{ description }}
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import DefaultLogo from "../assets/logo.svg";

export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: DefaultLogo,
    },
    bgColor: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true, // URL
    },
  },
  methods: {
    navigate() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursor-hover.svg"), pointer;
}
</style>
