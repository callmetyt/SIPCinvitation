import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
  },
  mutations: {
    showBtn(state) {
      state.show = true;
    },
    hideBtn(state) {
      state.show = false;
    },
  },
  actions: {},
  modules: {},
});
