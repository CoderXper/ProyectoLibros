import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Este require llama la carpeta de plugins que contiene Bootstrap para que este disponible en la App
require('./plugins')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
