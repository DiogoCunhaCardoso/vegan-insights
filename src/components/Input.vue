<template>
  <div class="bg-foreground-medium rounded-md flex items-center px-4">
    <input
      @input="$emit('update:modelValue', Number($event.target.value))"
      type="number"
      class="flex-1 py-2 outline-none bg-transparent text-text"
      placeholder="0"
      :min="0"
      :max="max"
      :aria-label="label"
    />
    <span class="text-subtext ml-2 text-sm">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: Infinity,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
