import axios from "axios";

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    async fetchTodos({ commit, rootGetters }) {
      const userId = rootGetters["userStore/getUser"].id;
      try {
        const response = await axios.post(
          "http://localhost:4000/todos/findall",
          {
            userId,
          }
        );
        commit("setTodos", response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteTodo({ dispatch, rootGetters }, todoId) {
      const token = rootGetters["userStore/getUser"].token;
      try {
        await axios.delete(`http://localhost:4000/todos/${todoId}/delete`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch("fetchTodos");
      } catch (error) {
        console.error(error);
      }
    },

    async updateTodo({ dispatch, rootGetters }, payload) {
      const token = rootGetters["userStore/getUser"].token;
      try {
        await axios.patch(`http://localhost:4000/todos/${payload._id}/update`, {
          ...payload,
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch("fetchTodos");
      } catch (error) {
        console.error(error);
      }
    },

    async createTodo({ dispatch, rootGetters }, todoText) {
      const token = rootGetters["userStore/getUser"].token;
      const userId = rootGetters["userStore/getUser"].id;

      const data = {
        userId: userId,
        todo: todoText,
      };
      try {
        await axios.post(`http://localhost:4000/todos/create`, {
          ...data,
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch("fetchTodos");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
