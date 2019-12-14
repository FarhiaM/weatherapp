export default {
    state() {
        return {
            result: {
                data: {
                    main: {
                        temp: null,
                        feels_like: null
                    },
                    name: null
                }
            },
            error: null
        }
    },
    getters: {
        weatherResult: state => state.result,
        randomInfo: state => state.result
    },
    mutations: {
        SET_RESULT_DATA(state, data) {
            state.error = false
            state.result = data
        },
        SET_ERROR(state, data) {
            state.result = null
            state.error = data
        }
    },
    actions: {
        async getWeatherResult({ commit, state }, searchText) {
            try {
                const data = await this.$axios.$get(process.env.NUXT_APP_API_BASE_URL, {
                    params: {
                        q: searchText,
                        appid: process.env.NUXT_APP_API_ID
                    }
                }).then(response => (state.result = response))
                commit('SET_RESULT_DATA', data)
            } catch (error) {
                commit('SET_RESULT_DATA', error)
            }
        },
        async getRandomInfo({ commit, state }, randomCo) {
            try {
                console.log('show both --> ', randomCo.randomLon, randomCo.randomLat);
                const randomData = await this.$axios.$get(process.env.NUXT_APP_API_BASE_URL, {
                    params: {
                        lon: randomCo.randomLon,
                        lat: randomCo.randomLat,
                        appid: process.env.NUXT_APP_API_ID
                    }
                }).then(response => (state.result = response))
                commit('SET_RESULT_DATA', randomData)
            } catch (error) {
                commit('SET_RESULT_DATA', error)
            }
        }
    },
    modules: {}
}