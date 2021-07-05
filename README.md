# Vuex

state ==> global data untuk komponen

mutations ==> set state

actions ==> proses async, misal request ke server

getters ==> untuk memanipulasi data dari state yg kemudian di sebarkan ke component

## Todo
- [x] Install vuex
    ```bash
    npm i vuex --save
    ```
- [x] Buat directory baru di src dengan nama `store`
- [x] buat file baru di dalamnya. `index.js`
- [x] isi `index.js` dengan
    ```js
    import Vue from 'vue'
    import Vuex from 'vuex'
    import router from '../router'
    import Axios from 'axios'

    const axios = Axios.create({
        baseURL: 'http://localhost:3000'
    })

    Vue.use(Vuex)

    export default new Vuex.Store({
    state: {
        // data global untuk components
        namaState: []
    },
    mutations: {
        // untuk set state
        // proses sync
        // biasanya penamaan an dengan huruf Kapital
        // supaya lebih mudah dalam pembacaannya
        SAMPLE (state, payload) {
            state.namaState = payload
        }
    },
    actions: {
        // untuk commit
        // proses async
        sampleAction (context, payload) {
            context.commit('SAMPLE', payload)
        }
    }, 
    getters: {
        // membuat / memodifikasi dari state
        sampleGetter (state) {
            return ...
        }
    })
    ```

- [x] Tambahkan store di vue
    ```js
    ...
    import store from './store'

    new Vue({
        router,
        store,      // <---- tambahkan store
        render: h => h(App)
    }).$mount('#app')
    ```

- [x] Akses dari components
    - state:
        `this.$store.state.namaState`
    - mutations:
        `this.$store.commit("MUTATION_NAME")`
    - actions:
        `this.$store.dispatch('namaAction', payload)`
    - getters:
        `this.$store.getters.sampleGetter`
