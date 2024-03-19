<template>
  <input class="input" :type="type" :name="name" :placeholder="placeholder" required />
</template>

<script>
export default {
  name: "FormInput",
  props: {
    type: String,
    name: String,
    placeholder: String,
  },
};
</script>
