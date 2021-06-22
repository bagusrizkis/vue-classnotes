<template>
  <div>
    <!-- ! BEGIN NAVBAR -->
    <header class="sticky top-0 z-10 fixed">
      <nav class="shadow-md w-full px-5 py-2 flex justify-between items-center">
        <p>H9 Students</p>
        <button
          @click="logout"
          v-if="isLogedin"
          class="bg-gray-100 hover:bg-red-200 font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </nav>
    </header>
    <!-- END NAVBAR -->

    <LoginPage v-if="!isLogedin" @checkAuth="checkAuth"></LoginPage>
    <Dashboard v-if="isLogedin"></Dashboard>
  </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
import Dashboard from "./views/Dashboard.vue";

export default {
  name: "App",
  components: {
    LoginPage,
    Dashboard,
  },
  data() {
    return {
      message: "Hello world",
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

<style></style>
