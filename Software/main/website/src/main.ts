/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ExampleTS from '@/interface/ExampleTS'
import OtherTS from '@/interface/importOtherTS'
import ExampleTS1 from './interface/ExampleTS'

console.log(OtherTS)
console.log(ExampleTS)
console.log(ExampleTS1)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
