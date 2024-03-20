<template>
  <main class="main">
    <div class="main__row" :class="{ registrated: authState }">
      <SignUp />
    </div>
  </main>
</template>

<script>
import SignUp from "../Signup/SignUp.vue";
import { mapGetters } from "vuex";

export default {
  components: { SignUp },
  name: "SignUpForm",

  computed: {
    ...mapGetters(["authState"]),
  },
};
</script>
