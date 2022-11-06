import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './api';
// Vue.config.productionTip = false
Vue.prototype.$api = ajax;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
