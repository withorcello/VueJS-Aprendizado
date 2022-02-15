import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../Layout/'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/calculadora',
        name: 'calculadora',
        component: () => import('../views/calculator')
      },
      {
        path: '/clientes',
        name: 'clientes',
        component: () => import('../views/clientes')
      }
    ]
    // beforeEnter: (to, from, next) => localStorage.getItem('Treinamento:token') ? next() : next('/login')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth')
    // beforeEnter: (to, from, next) => localStorage.getItem('Treinamento:token') ? next('/') : next()

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
