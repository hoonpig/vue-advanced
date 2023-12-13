import Vue from 'vue'
import {router} from './router/index.js'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
