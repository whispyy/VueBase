import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Main',
      component: () => import('@/components/Main')
    },
    {
      path: '/posts',
      name: 'Posts',
      component: () => import('@/components/Posts')
    }
  ]
})
