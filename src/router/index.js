import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  linkActiveClass: 'is-active'
})
