<template>
  <div>
    <h1 class="danger">{{ message }}</h1>
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
  data() {
    return {
      message: "Hello world",
    };
  },
};
</script>

<style></style>
