import { createStore } from 'vuex'

import auth from "./auth/index.js";
import user from "./user/index.js"

const modules = {
	auth,
	user
}
export default createStore({
	modules: modules
})
