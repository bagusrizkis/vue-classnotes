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
    movies: [],
    isLogin: false
  },
  mutations: {
    // proses sync
    SET_EVENTS (state, payload) {
      // filter event tertentu
      state.events = payload
    },
    SET_MOVIES () {
      /**
             * {
             * lainnya: ""
             * datas: []
             * }
             */
    },
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    // proses async
    fetchDataEvents (context) {
      axios({
        methods: 'GET',
        url: '/events',
        headers: {
          token: localStorage.access_token
        }
      }).then(({ data }) => {
        // di commit ke mutation
        context.commit('SET_EVENTS', data.Events)
      }).catch(err => {
        console.log(err)
      })
    },
    addEvent (context, payload) {
      axios({
        method: 'POST',
        url: '/events',
        headers: {
          token: localStorage.access_token
        },
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
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then((result) => {
        localStorage.setItem('access_token', result.data.token)
        context.commit('SET_ISLOGIN', true)
        router.push('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  // ini dari vuex
  getters: {
    // modifikasi state
    concertEvents (state) {
      return state.events.filter(e => e.tag === 'Concert')
    }
  }
})
