import Vue from 'vue'
import VueRouter from 'vue-router'

import articleList from '@/views/articleList/articleList'
import album from '@/views/album/album'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'album',
    component: album
  },
  {
    path: '/blog/:year',
    name: 'blog',
    component: () => import('@/views/blog/blog')
  },
  {
    path: '/article/:dirname/:filename',
    name: 'articleEssay',
    props:true,
    component: () => import('@/views/articleEssay/articleEssay.vue')
  },
  {
    path: '/*',
    name: 'error',
    component: () => import('@/views/error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
