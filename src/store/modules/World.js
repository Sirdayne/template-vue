const state = {
  world: 'World'
}

const getters = {
  getWorld: (state) => {
    return state.world
  }
}

const mutations = {
  SET_WORLD: (state, payload) => {
    state.world = payload
  }
}

const actions = {
  setWorld: ({commit}, payload) => {
    commit('SET_WORLD', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
