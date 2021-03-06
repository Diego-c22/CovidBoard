import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CountryDetail from '@/views/CountryDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/advices',
    name: 'Advices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Advices.vue')
  },
  {
    path: '/detail/:region/:name',
    name: 'CountryDetail',
    component: CountryDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
