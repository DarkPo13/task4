import * as types from "@/_store/mutationTypes";

export const mutations = {
  [types.SET_POSTS](state, data) {
    state.posts = data;
  }
};
