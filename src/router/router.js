import { createRouter, createWebHistory } from "vue-router";
import SignUpForm from "@/components/SignUpForm/SignUpForm.vue";
import AuthPage from "@/views/Auth.vue";
import NotFound from "@/views/NotFound.vue";
import HomePage from "@/views/HomeView.vue";
import autsStatus from "@/store/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: {
        requireAuth: true,
      },
      // children: [
      //   {
      //     path: "sign-up",
      //     name: "Sig-up",
      //     component: SignUpForm,
      //   },
      // ],
    },
    {
      path: "/sign-up",
      name: "Sig-up",
      component: SignUpForm,
    },
    {
      path: "/auth-done",
      name: "auth-done",
      component: AuthPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(autsStatus.getters.authState);

  if (to.meta.requireAuth && !autsStatus.getters.authState) {
    return { name: "Sig-up" };
  }
});

export default router;
