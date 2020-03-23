import Vue from 'vue'
import Vuex from 'vuex'
import World from '@/store/modules/World'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: 'Hello'
  },
  actions: {
    setValue ({commit}, result) {
      commit('SET_VALUE', result)
    }
  },
  mutations: {
    SET_VALUE (state, result) {
      state.value = result
    }
  },
  getters: {
    getValue (state) {
      return state.value
    }
  },
  modules: {
    World
  }
})
