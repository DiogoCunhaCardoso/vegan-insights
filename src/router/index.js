import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import VeganCalculatorView from "../views/VeganCalculatorView.vue";
import VeganFactsView from "../views/VeganFactsView.vue";
import AnimalKillCountView from "../views/AnimalKillCountView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/vegan-calculator",
    name: "VeganCalculator",
    component: VeganCalculatorView,
  },
  {
    path: "/vegan-facts",
    name: "VeganFacts",
    component: VeganFactsView,
  },
  {
    path: "/animal-kill-count",
    name: "AnimalKillCount",
    component: AnimalKillCountView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
