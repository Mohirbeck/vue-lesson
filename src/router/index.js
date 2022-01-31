import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cafe/:id',
    name: 'CafeDetails',
    component: () => import(/* webpackChunkName: "cafe_details" */ '../views/CafeDetails.vue')
  },
  {
    path: '/create',
    name: 'CafeCreate',
    component: () => import(/* webpackChunkName: "cafe_form" */ '../views/CafeForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
