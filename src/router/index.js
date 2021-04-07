import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../components/Form.vue'
import Sales from '../components/Sales.vue'
import Admin from '../components/Admin.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/sales/:id',
    name: 'Sales',
    component: Sales
  },
  {
    path: '/700af4ec-c7d8-4c9b-90ab-b3e44a1e89c0',
    name: 'Admin',
    component: Admin,
    meta: { layout: 'empty' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
