// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'

import './main.scss'
import 'spinkit/css/spinkit.css'

Vue.use(VueAnalytics, {
  id: 'UA-79288806-5',
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data () {
    return {
      images: ['./assets/logo.png']
    }
  },
  components: { App }
})
