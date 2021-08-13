<template>
    <div>
        <h1>From Homepage</h1>
        <br>
        <Login @emitLogin="login" :content="content"></Login>
        <p>{{ content }}</p>
        <!-- ADA CONTENT yang didapat dari parent -->
    </div>
</template>

<script>
import Login from "../components/Login.vue"

export default {
    name: "Homepage",
    data() {
        return {
            todos: []
        }
    },
    components: { 
        Login
    },
    props: ["content"],
    methods: {
        login(payload) {
            // console.log("dari parent", payload)
            this.$emit('emitLogin', payload)
        }
    }
}
</script>

<style></style>