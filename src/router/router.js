import { createRouter, createWebHistory } from "vue-router";
import SignUpPage from "@/views/SignUpView.vue";
import AuthPage from "@/views/AuthView.vue";
import NotFound from "@/views/NotFoundView.vue";
import autsStatus from "@/store/store";
import FriendsList from "@/views/FriendsListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: FriendsList,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/sign-up",
      name: "Sig-up",
      component: SignUpPage,
    },
    {
      path: "/auth-done",
      name: "Auth-done",
      component: AuthPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.requireAuth && !autsStatus.getters.authState) {
    return { name: "Sig-up" };
  }
});

export default router;
