import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dash from '@/components/dashboard'
import Todolist from '@/components/todopage'
import Ecommerce from '@/components/ecommerce'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dash
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: Todolist
    },
    {
      path: '/e-commerce',
      name: 'ecommerce',
      component: Ecommerce
    },
    { path: '*', redirect: '/' },
  ]
})
