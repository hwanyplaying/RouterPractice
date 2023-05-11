import {fetchAskInfo, fetchAskList, fetchJobsList, fetchList, fetchUserInfo,} from "@/api";
// actions → api를 호출해 온 경우 import 했던 구문도 여기에 선언해야 한다.
export default {
    // promise
    /*FETCH_NEWS({ commit }) {
        return fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data);
                return res;
            })
            .catch(error => {
                console.log(error);
            });
    },*/

    /*// async
    async FETCH_NEWS({ commit }) {
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },*/

    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(res => {
                commit('SET_ASK', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER(context, name) {
        return fetchUserInfo(name)
            .then(res => {
                context.commit('SET_USER', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_INFO({ commit }, userId) {
        return fetchAskInfo(userId)
            .then(res => {
                commit('SET_askINFO', res.data);
            })
            .catch(error => console.log(error));
    },
    /*// promise
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    },*/

    // async
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}