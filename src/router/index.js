import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../components/Form.vue'
import Sales from '../components/Sales.vue'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sales
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
