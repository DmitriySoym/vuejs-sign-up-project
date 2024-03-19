<template>
  <main class="main">
    <div class="main__row" :class="{ registrated: isAuth }">
      <SignUp v-if="!isAuth" />
    </div>
  </main>
</template>

<script>
import SignUp from "../components/Signup/SignUp.vue";
export default {
  components: { SignUp },
  name: "SignUpView",

  data() {
    return {
      isAuth: false,
    };
  },
};
</script>
