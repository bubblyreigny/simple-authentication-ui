import actions from "./actions.js"
import mutations from "./mutations.js"
import state from "./state.js"
import getters from "./getters.js"

export default ({
    namespaced: true,
    getters,
    actions,
    mutations,
    state,
})