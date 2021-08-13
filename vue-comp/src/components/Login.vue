<template>
  <div>
        <input type="text" v-model="email">
        <input type="password" v-model="pw">
        <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            pw: ""
        }
    },
    props: ['content'],
    methods: {
        login() {
            // emit ke parent
            // membawa value
            console.log("dari children")
            // console.log(this.email, this.pw)
            this.$emit('emitLogin', {
                email: this.email, password: this.pw
            })
        }
    }
}
</script>

<style>

</style>