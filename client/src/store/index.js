import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'

const axios = Axios.create({
    baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      events: [],
    },
    mutations: {
        // proses sync
        SET_EVENTS (state, payload) {
            state.events = payload
        }
    },
    actions: {
        // proses async
        fetchDataEvents (context) {
            axios({
                methods: 'GET',
                url: '/events'
              }).then(({ data }) => {
                    // di commit ke mutation
                    context.commit('SET_EVENTS', data)
              }).catch(err => {
                console.log(err)
              })
        },
        addEvent (context, payload) {
            console.log(payload)
            console.log(context)
            axios({
                method: 'POST',
                url: '/events',
                data: {
                  title: payload.title,
                  tag: payload.tag,
                  date: payload.date,
                  imgUrl: payload.imgUrl
                }
            }).then(() => {
                // pindah halaman
                router.push({ name: 'Home' })
            }).catch(err => {
                console.log(err)
            })
        }
    },
    // ini dari vuex
    getters: {
        concertEvents (state) {
            return state.events.filter(e => e.tag == 'Concert')
        }
    }
})