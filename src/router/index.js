import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CategoryView from "../views/CategoryView.vue";
import DetailView from "../views/DetailView.vue";
import ProductCatalogView from "../views/ProductCatalogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView
    },
    {
      path: "/category/:id",
      name: "categoryList",
      component: ProductCatalogView
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  }
});

export default router;
