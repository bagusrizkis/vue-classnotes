<template>
  <div>
    <h1>Homepage</h1>
    <!-- pakai component Login -->
    <LoginComponent
      @msgFromC="lakuinIni"
      :propKuyNih="fromParent"
    ></LoginComponent>
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";

export default {
  components: {
    // kumpulan komponen
    LoginComponent,
  },
  data() {
    return {
      fromParent: "Hello from parent",
    };
  },
  methods: {
    lakuinIni(value, v2, v3, v4) {
      // rubah page dll
      console.log(value);
    },
  },
};
</script>

<style></style>
