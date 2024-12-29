<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      dropdownItems: [
        { name: "Vegan Calculator", routeName: "calculator" },
        { name: "Vegan Facts", routeName: "facts" },
        { name: "Animal Kill Count", routeName: "killCount" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<template>
  <div class="flex justify-between items-center max-w-6xl mx-auto px-6 md:px-7">
    <!-- Left side: Logo and title -->
    <RouterLink
      :to="{ name: 'home' }"
      class="flex items-center text-accent font-bold text-md custom-cursor"
      @click="isDropdownOpen = false"
    >
      <img src="../assets/logo.svg" alt="Logo" class="w-7 h-7 mr-2" />
      <span>Vegan Insights</span>
    </RouterLink>

    <!-- Right side: Navigation links -->
    <div class="flex space-x-4">
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="text-md font-bold text-accent flex items-center custom-cursor"
        >
          Resources
          <svg
            class="w-3 h-3 ml-2 transition-transform duration-200 custom-cursor"
            :class="{ 'transform rotate-180': isDropdownOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10.9589 1.41701C8.13633 1.88205 4.10194 1.13103 1.39572 0.406308C0.900448 0.273676 0.474939 0.814181 0.733285 1.25706L5.30211 9.08933C5.53085 9.48145 6.08378 9.51739 6.36135 9.15818L11.6112 2.36426C11.877 2.02022 11.3879 1.34633 10.9589 1.41701Z"
              fill="#FCA0C5"
            />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 rounded-xl overflow-hidden border"
        >
          <RouterLink
            v-for="item in dropdownItems"
            :key="item.routeName"
            :to="{ name: item.routeName }"
            class="block px-4 py-2 text-sm text-white transition-colors custom-cursor"
            :class="{
              'bg-foreground-dark font-medium': $route.name === item.routeName,
              'bg-foreground-light hover:bg-foreground-medium':
                $route.name !== item.routeName,
            }"
            @click="isDropdownOpen = false"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-cursor:hover {
  cursor: url("../assets/cursors/hover.svg"), pointer;
}
</style>
