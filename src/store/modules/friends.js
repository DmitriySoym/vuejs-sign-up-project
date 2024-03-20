const state = () => {
  return {
    friends: ["Viktor", "Oleg", "Pavel", "Anna", "Sveta", "Olga", "Sergey"],
    friendsFilter: "",
  };
};

const mutations = {
  SET_FRIENDS_FILTER(state, payload) {
    state.friendsFilter = payload;
  },

  ADD_NEW_FRIEND(state, payload) {
    state.friends.push(payload);
  },
};

const getters = {
  friendsList(state) {
    return state.friends.filter((friendsName) => friendsName.toLowerCase().includes(state.friendsFilter.toLowerCase()));
  },

  friendsNumber(state) {
    return state.friends.length;
  },
};

const actions = {
  setFriendsFilter({ commit }, payload) {
    commit("SET_FRIENDS_FILTER", payload);
  },

  addNewFriend({ commit }, payload) {
    commit("ADD_NEW_FRIEND", payload);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
