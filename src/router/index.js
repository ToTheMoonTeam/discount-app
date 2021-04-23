import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../components/Form.vue'
import Sales from '../components/Sales.vue'
import Admin from '../components/Admin.vue'
import Login from '../components/Login.vue'
import Prostomarik from '../components/Prostomarik.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Prostomarik',
    component: Prostomarik,
    meta: { layout: 'dark' }
  },
  {
    path: '/sales-cards',
    name: 'Form',
    component: Form
  },
  {
    path: '/sales-cards/sales/:id',
    name: 'Sales',
    component: Sales
  },
  {
    path: '/sales-cards/admin',
    name: 'Admin',
    component: Admin,
    meta: { layout: 'empty' }
  },
  {
    path: '/sales-cards/login',
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
