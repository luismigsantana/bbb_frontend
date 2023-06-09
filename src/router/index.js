import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Cadastro
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
