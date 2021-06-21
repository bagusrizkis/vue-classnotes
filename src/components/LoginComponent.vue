<template>
  <div>
    <h1>Login</h1>
    {{ propKuyNih }}
    <form>
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
      <input type="submit" value="Login" />
    </form>
    <button @click="sendEmit">Emit</button>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: ["propKuyNih"],
  data() {
    return {
      email: "",
      password: "",
      fromChildren: "Hello Parent from children",
    };
  },
  methods: {
    sendEmit() {
      this.$emit("msgFromC", "string langsung", 1, 2, 3);
    },
  },
};
</script>

<style>
.danger {
  color: red;
}
</style>
