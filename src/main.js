import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueLazyload from 'vue-lazyload'
require('./mock.js')

Vue.config.productionTip = false
Vue.use(VueLazyload)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

