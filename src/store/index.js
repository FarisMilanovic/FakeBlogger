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
    NEW_POST (state, post) {state.posts.unshift(post)},
    REMOVE_POST (state, id) {state.posts = state.posts.filter((post) => post.id !== id)}
  },
  actions: {
    async getPosts({ commit }) {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`);
        commit('SET_POSTS', response.data);
        },
    async addPost({ commit }, title, body) {
      const response = await axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {title, body});
        commit('NEW_POST', response.data)
        console.log(response.data)
    },
    async deletePost ({commit}, id) {
      try{
      await axios.delete(`https://jsonplaceholder.typicode.com/posts${id}`);
      commit ('REMOVE_POST', id)
      }catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
