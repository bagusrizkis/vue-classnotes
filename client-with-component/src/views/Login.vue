<template>
  <!-- ! BEGIN LOGIN -->
  <div class="flex justify-center content-center mt-10">
    <div class=" w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-800 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="loginInput.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          placeholder="user@mail.com"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          v-model="loginInput.password"
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          @click="loginUser"
          class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
  <!-- END LOGIN -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginInput: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      axios({
        method: "POST",
        url: "http://localhost:3000/users/login",
        data: {
          email: this.loginInput.email,
          password: this.loginInput.password,
        },
      })
        .then((result) => {
          localStorage.setItem("access_token", result.data.access_token);
          // pakai emit
          this.$emit("checkAuth");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
