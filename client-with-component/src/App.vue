<template>
  <div>
    <header class="sticky top-0 z-10 fixed">
      <nav class="shadow-md w-full px-5 py-2 flex justify-between items-center">
        <p>H9 Students</p>
        <button
          @click="logout"
          class="bg-gray-100 hover:bg-red-200 font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </nav>
    </header>

    <Login v-if="!isLogedin" @checkAuth="checkAuth"></Login>
    <Dashboard v-if="isLogedin"></Dashboard>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";

export default {
  name: "App",
  components: { Login, Dashboard },
  data() {
    return {
      isLogedin: false,
    };
  },
  methods: {
    checkAuth() {
      if (localStorage.access_token) {
        this.isLogedin = true;
      } else {
        this.isLogedin = false;
      }
    },
    logout() {
      localStorage.clear();
      this.checkAuth();
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style scoped></style>
