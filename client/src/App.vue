<template>
  <div
    class="justify-content-center align-items-center container"
    style="height: 100vh"
  >
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/home">Home</router-link>
          <!-- <a href="/"> -->
        </li>
        <li class="breadcrumb-item">
          <!-- <router-link to="/about">About</router-link> -->
          <a href="#" @click.prevent="toAbout">About</a>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/hello-world">HelloWorld</router-link>
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
