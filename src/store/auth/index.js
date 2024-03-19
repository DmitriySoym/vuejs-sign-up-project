import store from "../store";

const state = () => ({
  isAuth: false,
});

const mutations = {
  TOGGLE_AUTH(state) {
    state.isAuth = !state.isAuth;
  },
};

const getters = {
  authState(state) {
    return state.isAuth;
  },
};

const actions = {
  toggleAuth({ commit }) {
    commit("TOGGLE_AUTH");
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
