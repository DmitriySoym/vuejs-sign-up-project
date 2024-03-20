<template>
  <header class="header">
    <router-link class="header__logo" to="/">Logotype</router-link>
    <router-link class="header__tools" to="/">MyTools</router-link>
    <button v-if="authState" class="form__btn" @click.prevent="signeOf">Выйти</button>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "AppHeader",

  computed: {
    ...mapGetters(["authState"]),

    isAuthUser() {
      return this.authState();
    },
  },

  methods: {
    ...mapActions(["toggleAuth"]),

    signeOf() {
      this.toggleAuth();
      this.$router.push("/sign-up");
    },
  },
};
</script>
