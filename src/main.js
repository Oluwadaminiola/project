// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Jquery from 'jquery'

Vue.use(Vuetify);
Vue.use(Jquery)
Vue.config.productionTip = false

require('@/assets/css/bootstrap.css')
require('@/assets/css/style.css')

// require('@/assets/js/bootstrap.js')
// require('@/assets/js/jquery.min.js')

// require('@/assets/css/mdb-pro.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
