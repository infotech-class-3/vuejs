import { createStore } from "vuex";
import axios from "axios";
import router from "../router/index";

export default createStore({
  state: {
    loggedInUser: {},
  },
  getters: {
    getUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.loggedInUser = payload;
    },
  },
  actions: {
    async login({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:4000/users/login",
          userData
        );

        window.localStorage.setItem("token", response.data.token);

        commit("setUser", response.data);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
