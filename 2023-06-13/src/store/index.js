import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      users: [
        { id: 1, adi: "Osman", yasi: 21, isActive: true },
        { id: 2, adi: "Mahmut", yasi: 32, isActive: true },
        { id: 3, adi: "Zeynep", yasi: 18, isActive: true },
        { id: 4, adi: "Fatma", yasi: 28, isActive: true },
      ],
      secilenKullanici: "",
    };
  },

  mutations: {
    setSelectedUser(state, payload) {
      state.secilenKullanici = payload;
    },
  },

  getters: {
    getUsers(state) {
      return state.users;
    },

    getSelectedUser(state) {
      return state.secilenKullanici;
    },
  },

  actions: {},
});
