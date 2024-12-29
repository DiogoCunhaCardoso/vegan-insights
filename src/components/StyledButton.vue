<template>
  <button
    @click="emitToggle"
    :class="[
      'text-semibold px-4 py-2 rounded-md custom-cursor',
      isActive ? 'bg-[#fc81b2] text-white' : 'text-foreground-light',
    ]"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitToggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
