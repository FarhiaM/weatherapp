export default {
  state () {
    return {
      data: {
        main: {
          temp: null,
          feels_like: null
        },
        name: null
      }
    }
  },
  getters: {
    weatherResult: state => state.data,
    randomInfo: state => state.data
  },
  mutations: {
    SET_RESULT_DATA (state, data) {
      state.error = false
      state.data = data
    },
    SET_ERROR (state, data) {
      state.error = true
      state.data = ''
    }
  },
  actions: {
    async getWeatherResult ({ commit }, searchText) {
      const data = await this.$axios.$get(process.env.NUXT_APP_API_BASE_URL, {
        params: {
          q: searchText,
          appid: process.env.NUXT_APP_API_ID,
          units: 'metric'
        }
      })
      data.name ? commit('SET_RESULT_DATA', data) : commit('SET_ERROR', data)
    },
    async getRandomInfo ({ commit }, randomCo) {
      const randomData = await this.$axios.$get(process.env.NUXT_APP_API_BASE_URL, {
        params: {
          lon: randomCo.randomLon,
          lat: randomCo.randomLat,
          units: 'metric',
          appid: process.env.NUXT_APP_API_ID
        }
      })
      commit('SET_RESULT_DATA', randomData)
    }
  },
  modules: {}
}
