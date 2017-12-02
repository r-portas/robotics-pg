import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import About from '@/pages/About'
import Events from '@/pages/Events'

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
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ],
  linkActiveClass: 'is-active'
})
