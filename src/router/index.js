import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Itme from '../components/Item'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  } ,
  {
    path: '/Itme',
    name: 'Itme',
    component: Itme
  } ,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
