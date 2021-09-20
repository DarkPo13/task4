import {actions} from "./actions";
import {mutations} from "./mutations";
import {state} from "./state";

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
}