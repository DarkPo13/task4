import * as types from "./mutationTypes";
import { postsService } from "../_services";

const initialState = {
    errors: {
      errorsLog: null
    },
  
    posts: {
      posts: []
    }
  };

  const state = { ...initialState.posts };

  const getters = {
    posts: state => state.posts,
  };
  
  const actions = {
    getPosts: async ({ commit }) => {
      const data = await postsService.getPostsList();
  
      commit(types.SET_POSTS, data);
    }
  };

  const mutations = {
    [types.SET_POSTS](state, data) {
      state.posts = data;
    }
  };


  export const posts = {
    state,
    getters,
    mutations,
    actions
  };