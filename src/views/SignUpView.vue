<template>
  <main class="main">
    <div class="main__row" :class="{ registrated: isAuth }">
    </div>
  </main>
</template>

<script>
export default {
  name: "SignUpView",

  data() {
    return {
      isAuth: false,
    };
  },
};
</script>
