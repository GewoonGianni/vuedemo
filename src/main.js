import Vue from 'vue'
import Covid from './Covid.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Covid),
}).$mount('#app')
