<template>
  <main class="main">
    <div class="main__row" :class="{ registrated: authState }">
      <SignUp v-if="!authState" />
    </div>
  </main>
</template>

<script>
import SignUp from "../components/Signup/SignUp.vue";
import { mapGetters } from "vuex";
export default {
  components: { SignUp },
  name: "SignUpView",

  computed: {
    ...mapGetters(["authState"]),
  },
};
</script>
