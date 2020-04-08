import Vue from 'vue'
import VueRouter from 'vue-router'

// import articleList from '@/views/articleList/articleList'
// import album from '@/views/album/album'
// import blog from '@/views/blog/blog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/album/:gallery',
    name: 'album',
    props:true,
    component: () => import('@/views/album/album')
  },
  {
    path: '/query',
    name: 'query',
    component: () => import('@/views/query/query')
  },
  {
    path: '/blog/:year',
    name: 'blog',
    props:true,
    component: () => import('@/views/blog/blog')
  },
  {
    path: '/essay/:dirname/:filename',
    name: 'essay',
    props:true,
    component: () => import('@/views/essay/essay')
  },
  {
    path: '/*',
    name: 'error',
    component: () => import('@/views/error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
