<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-background min-h-screen flex flex-col">
    <header class="mt-8 md:mt-10 lg:mt-12">
      <Navigation />
    </header>

    <main
      class="py-10 sm:py-12 md:py-14 lg:py-28 px-6 md:px-8 max-w-6xl mx-auto flex-grow"
    >
      <RouterView />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style>
body {
  cursor: url("./assets/cursors/default.svg") 10 10, auto;
}
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
</style>
