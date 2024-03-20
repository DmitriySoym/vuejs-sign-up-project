import { createStore } from "vuex";
import auth from "./modules/auth";
import friends from "./modules/friends";

const store = createStore({
  modules: {
    auth,
    friends,
  },
});

export default store;
