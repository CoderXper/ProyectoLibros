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
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Galeria.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/autorizado',
    name: 'Autorizado',
    component: () => import(/* webpackChunkName: "libros" */ '../views/Autorizado.vue'),
    Children:[
      {
        path: 'libros',
        name: 'Libros',
        component: () => import(/* webpackChunkName: "libros" */ '../views/Libros.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
