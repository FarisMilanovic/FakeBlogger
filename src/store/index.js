import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    NEW_POST (state, post) {
      state.posts.unshift(post)
    },
    REMOVE_POST (state, postId) {
      let posts = state.posts.filter(i => i.id != postId)
      state.posts = posts;
    }
  },
  actions: {
    async getPosts({ commit }) {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`);
        commit('SET_POSTS', response.data);
        },
    async addPost({ commit }, newPost) {
      const response = await axios
       .post(`https://jsonplaceholder.typicode.com/posts`, {newPost});
        commit('NEW_POST', response.data)
        console.log(response.data)
    },
    async deletePost ({commit}, post) {
      commit ('REMOVE_POST', post)
    }
  },
  modules: {
  }
})
