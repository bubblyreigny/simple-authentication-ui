export default {
    SET_USERS_LIST: (state, payload) => {
        state.usersList = payload
    },
    SET_CURRENT_USER: (state, payload) => {
        state.currentUser = Object.assign({}, {
            ...state.currentUser,
            ...payload
        })
    },
    RESET_CURRENT_USER: (state, payload) => {
        state.currentUser = Object.assign({}, {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            password: '',
            postcode: '',
        })
    }
}