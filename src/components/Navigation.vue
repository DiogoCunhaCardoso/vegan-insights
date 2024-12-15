<template>
  <nav class="flex justify-between items-center relative">
    <router-link to="/" class="text-accent font-bold text-md custom-cursor"
      ><span class="flex items-center custom-cursor">
        <img
          src="../assets/logo.svg"
          alt="Logo"
          class="w-8 h-8 mr-2 custom-cursor"
        />
        <a href="#" class="text-accent font-bold text-md custom-cursor"
          >Vegan Insights</a
        >
      </span></router-link
    >

    <!-- Dropdown Menu -->
    <div class="relative custom-cursor">
      <button
        @click="toggleDropdown"
        class="text-accent font-bold text-md flex items-center custom-cursor"
      >
        Resources
        <!-- Dropdown arrow icon -->
        <svg
          class="w-4 h-4 ml-2 transition-transform duration-200 custom-cursor"
          :class="{ 'transform rotate-180': dropdownVisible }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <!-- Dropdown options -->
      <div
        v-if="dropdownVisible"
        class="absolute right-0 mt-2 bg-foreground-light text-white border rounded-lg shadow-lg custom-cursor"
      >
        <router-link
          v-for="(item, index) in dropdownItems"
          :key="index"
          :to="item.link"
          class="block px-4 py-2 text-sm text-white rounded-lg transition-colors custom-cursor"
          :class="{
            'bg-foreground-dark font-medium text-subtext':
              isActive === index + 1,
            'bg-foreground-light hover:bg-foreground-medium':
              isActive !== index + 1,
          }"
        >
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    isActive: {
      type: Number,
    },
  },
  data() {
    return {
      dropdownVisible: false,
      dropdownItems: [
        { text: "Vegan Calculator", link: "/vegan-calculator" },
        { text: "Vegan Facts", link: "/vegan-facts" },
        { text: "Animal Kill Count", link: "/animal-kill-count" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },
};
</script>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursor-hover.svg"), pointer;
}
</style>
