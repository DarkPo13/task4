import * as types from "@/_store/mutationTypes";
import { postsService } from "@/_services/posts.service";

export const actions = {
  getPosts: async ({ commit }) => {
    const data = await postsService.getPostsList();

    commit(types.SET_POSTS, data);
  }
};
