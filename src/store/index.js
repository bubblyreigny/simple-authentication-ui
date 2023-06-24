import { createStore } from 'vuex'

import auth from "./auth/index.js";
import user from "./user/index.js"

const modules = {
	auth,
	user
}
export default createStore({
	state: {
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
	modules: modules
})
