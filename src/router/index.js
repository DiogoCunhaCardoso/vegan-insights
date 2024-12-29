import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalculatorView from "../views/CalculatorView.vue";
import FactsView from "../views/FactsView.vue";
import KillCountView from "../views/KillCountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calculator",
      name: "calculator",
      component: CalculatorView,
    },
    {
      path: "/facts",
      name: "facts",
      component: FactsView,
    },
    {
      path: "/kill-count",
      name: "killCount",
      component: KillCountView,
    },
  ],
});

export default router;
