import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: {},
    cuntriesRegion: {},
    isLoading: false
  },
  mutations: {
    changeCountry (state, paylod = {}) {
      state.country = paylod
    },
    getCountriesRegion (state, payload = {}) {
      state.cuntriesRegion = payload
    },
    changeStateLoading (state, paylod = false) {
      state.isLoading = paylod
    }
  },
  actions: {
  },
  modules: {
  }
})
