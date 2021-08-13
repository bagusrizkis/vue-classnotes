<template>
    <div>
        <h1>{{ message }}</h1>
        <Homepage @emitLogin="readFromLogin" :content="content" />
    </div>
</template>

<script>
    import Homepage from "./views/HomePage.vue"

    export default {
        name: "App",
        data() {
            return {
                page: '',
                isLogin: false,
                message: "Hello world",
                content: "ini kontent panjang",
            };
        },
        components: {
            Homepage
        },
        methods: {
            readFromLogin: function (payload) {
                console.log(payload);
            }
        }
    };
</script>

<style scoped>

</style>