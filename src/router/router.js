import { createRouter, createWebHistory } from "vue-router";
import SignUpPage from "@/views/SignUpView.vue";
import AuthPage from "@/views/Auth.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signup",
      component: SignUpPage,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
