import {
    actions
} from "./actions";
import {
    mutations
} from "./mutations";
import {
    state
} from "./state";

export const account = {
    namespaced: true,
    actions,
    mutations,
    state
};