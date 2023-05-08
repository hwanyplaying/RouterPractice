import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList, fetchJobsList, fetchAskList} from "@/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(res => {
                    console.log(res.data);
                    context.commit('SET_NEWS', res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(res => {
                    console.log(res.data);
                    context.commit('SET_ASK', res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(res => {
                    console.log(res.data);
                    context.commit('SET_JOBS', res.data);
                })
        }
    }
});