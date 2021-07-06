<template>
  <div
    class="justify-content-center align-items-center container"
    style="height: 100vh"
  >
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-if="isLogin" class="breadcrumb-item">
          <router-link to="/">Home</router-link>
          <!-- <a href="/"> -->
        </li>
        <li class="breadcrumb-item">
          <!-- <router-link to="/about">About</router-link> -->
          <a href="#" @click.prevent="toAbout">About</a>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/hello-world">HelloWorld</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link v-if="!isLogin" to="/login">Login</router-link>
          <a href="#" v-if="isLogin" @click.prevent="logout">Logout</a>
        </li>
      </ol>
    </nav>
    <!-- self closed tag -->
    <!-- <router-view/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toAbout () {
      this.$router.push('/about')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    // cek apakah is login false atau true
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_ISLOGIN', true)
    } else {
      this.$store.commit('SET_ISLOGIN', false)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
