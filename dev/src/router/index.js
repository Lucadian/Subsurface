import Vue from 'vue'
import VueRouter from 'vue-router'

import articleList from '../views/articleList/articleList.vue'
import articleEssay from '@/views/articleEssay/articleEssay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'articleEssay',
    props:true,
    component: articleEssay,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   props:true,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
