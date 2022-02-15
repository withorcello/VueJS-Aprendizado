import Vue from 'vue'
import Vuex from 'vuex'
// Aqui eu importo os modulos(as stores das paginas e o app).
import app from './app/'
import paginaDeClientes from '../views/clientes/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  // Aqui é onde registra os modulos
  modules: {
    app,
    paginaDeClientes
  }
})
