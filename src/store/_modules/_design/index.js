export default {
  state: {
    isPreload: false,
    locale: 'ua'
  },
  getters: {
    getIsPreload (state) {
      return state.isPreload
    },
    getLocale (state) {
      return state.locale
    }
  },
  mutations: {
    setIsPreload (state, data) {
      state.isPreload = data
    },
    setLocale (state, data) {
      state.locale = data
    }
  }
}
