import {fetchAskInfo, fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo,} from "@/api";
// actions → api를 호출해 온 경우 import 했던 구문도 여기에 선언해야 한다.
export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(res => {
                console.log(res.data);
                commit('SET_NEWS', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(res => {
                console.log(res.data);
                commit('SET_JOBS', res.data);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(res => {
                console.log(res.data);
                commit('SET_ASK', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER(context, name) {
        fetchUserInfo(name)
            .then(res => {
                console.log(res.data);
                context.commit('SET_USER', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_INFO({ commit }, userId) {
        fetchAskInfo(userId)
            .then(res => {
                commit('SET_askINFO', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}