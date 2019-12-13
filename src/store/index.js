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
                name: null
            }
        },
        error: null,
        random: {
            data: {
                main: {
                    temp: null,
                    feels_like: null
                },
                name: null
            }
        },
    },
    getters: {
        weatherResult: state => state.result,
        random: state => state.result
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
        SET_RANDOM_RESULT_DATA(state, data) {
            state.error = false;
            state.random = data;
        },
    },
    actions: {
        async getWeatherResult({ commit, state }, searchText) {
            try {
                const data = await axios.get('/weather', {
                    params: {
                        q: searchText
                    }
                }).then(response => (state.result = response));
                commit('SET_RESULT_DATA', data);
            } catch (error) {
                console.log(error);
            }
        },
        async getRandom({ commit, state }) {
            try {
                const data = await axios.get('http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off', {
                }).then(response => (state.random = response));
                commit('SET_RANDOM_RESULT_DATA', data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})