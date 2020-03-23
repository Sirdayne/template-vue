
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import lodash from 'lodash'
window._ = lodash

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
