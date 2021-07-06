import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPage from '../views/AddPage.vue'
import HelloWorld from '../components/HelloWorld.vue'
import EditPage from '../views/EditPage.vue'
import TrendingEvent from '../components/TrendingEvent.vue'
import OnlineEvent from '../components/OnlineEvent.vue'
import LoginPage from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: { name: 'TrendingEvent' },
    meta: { requiresAuth: true },
    children: [
      {
        path: 'trending',
        name: 'TrendingEvent',
        component: TrendingEvent
      },
      {
        path: 'online',
        name: 'OnlineEvent',
        component: OnlineEvent
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) next('/')
      else next()
    }
  },
  {
    path: '/add',
    name: 'AddPage',
    component: AddPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/edit/:id',
    name: 'EditPage',
    component: EditPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('access_token')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
