import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detalle from '../views/Detalle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    
  },
  {
    path: '/catalogo/detalle/:id',
    name: 'detalle',
    props:true,
    component: Detalle,
   
  },
  {
    path:'/ubicacion',
    name:'ubicacion',
    component:() => import(/* webpackChunkName: "location" */ '../views/Ubicacion.vue')
    },
  {
    path:'/cart',
    name:'Cart',
    component:() => import('../views/Cart.vue')

  } 
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

export default router
