import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    EDIT_POST(state, updatedPost) {
      const index = state.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts[index] = updatedPost;
      }
    },
    DELETE_POST(state, postId) {
      state.posts = state.posts.filter(post => post.id !== postId);
    }
  },
  actions: {
    addPost({ commit }, post) {
      commit('ADD_POST', post);
    },
    editPost({ commit }, post) {
      commit('EDIT_POST', post);
    },
    deletePost({ commit }, postId) {
      commit('DELETE_POST', postId);
    }
  },
  getters: {
    allPosts: state => state.posts,
    getPostById: state => id => state.posts.find(post => post.id === id)
  }
});
