import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: {
            data: {
                main: {
                    temp: null,
                    feels_like: null
                },
                name: String
            }
        },
        error: null
    },
    getters: {
        weatherResult: state => state.result
    },
    mutations: {
        SET_RESULT_DATA(state, data) {
            state.error = false;
            state.result = data;
        },
        SET_ERROR(state, data) {
            state.result = null;
            state.error = data;
        },
    },
    actions: {
        async getWeatherResult({ commit, state }, searchText) {
            try {
                const data = await axios.get('', {
                    params: {
                        q: searchText
                    }
                }).then(response => (state.result = response));
                commit('SET_RESULT_DATA', data);
                console.log('inside commit ---- dataaaa ', data)
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})