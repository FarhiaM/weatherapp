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
    },
    getters: {
        weatherResult: state => state.result,
        randomCity: state => state.result,
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
                const data = await axios.get('/weather', {
                    params: {
                        q: searchText
                    }
                }).then(response => (state.result = response));
                commit('SET_RESULT_DATA', data);
            } catch (error) {
                commit('SET_RESULT_DATA', error);
            }
        },
        async getRandomInRange({ commit, state }, longtitude, latitude) {
            try {
                const randomData = await axios.get('/weather', {
                    params: {
                        lon: longtitude,
                        lat: latitude
                    }
                }).then(response => (state.result = response));
                commit('SET_RESULT_DATA', randomData);
            } catch (error) {
                commit('SET_RESULT_DATA', error);
            }
        }
    },
    modules: {}
})