import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
  },
  mutations: {
    SET_POSTS: (state, posts) => (state.posts = posts),
    NEW_POST: (state, post) => state.posts.unshift(post)
  },
  actions: {
    async getPosts({ commit }) {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`);
        commit('SET_POSTS', response.data);
        },
    async addPost({ commit }, title) {
      const response = await axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {title, completed: false });
        commit('NEW_POST', response.data)
    }
  },
  modules: {
  }
})
