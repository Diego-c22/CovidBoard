import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { amountFilter, maxLegth } from '@/filters'

Vue.config.productionTip = false
Vue.filter('amount', amountFilter)
Vue.filter('legth', maxLegth)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
