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
    children:[
      {
        path: 'libros',
        name: 'Libros',
        component: () => import(/* webpackChunkName: "libros" */ '../views/Libros.vue')
      },
      {
        path: 'intercambios',
        name: 'Intercambios',
        component: () => import(/* webpackChunkName: "intercambios " */ '../views/Intercambios.vue')
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
