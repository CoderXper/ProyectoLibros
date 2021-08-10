import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import libros from '@/modules/libros'
import cart from '@/modules/cart'

export default new Vuex.Store({
  modules: {
    libros, cart
  }
})
