import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import states from "@/store/states";
import actions from "@/store/actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    states,
    getters,
    mutations,
    actions
//     앞뒤가 똑같은 경우 생략 가능하다
//     ex: actions: actions → actions
});