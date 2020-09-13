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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/activities',
    name: 'ActivityView',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivityView.vue')
  },
  {
    path: '/events',
    name: 'EventView',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/EventView.vue')
  },
  {
    path: '/places',
    name: 'PlaceView',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/PlaceView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
