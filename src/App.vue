<template>
  <app-header />
  <RouterView />
</template>

<script>
import AppHeader from "./components/Header/Header.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped></style>
