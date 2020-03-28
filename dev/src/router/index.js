import Vue from 'vue'
import VueRouter from 'vue-router'

import articleList from '../views/articleList/articleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'articleList',
    component: articleList,
  },
  {
    path: '/article/:dirname/:filename',
    name: 'articleEssay',
    props:true,
    component: () => import('../views/articleEssay/articleEssay.vue')
  },
  {
    path: '/*',
    name: 'error',
    component: () => import('../views/error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
