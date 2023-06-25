export default {
    SET_AUTHENTICATED_USER: (state, payload) => {
        state.authenticated_user = 
        Object.assign({}, {
            ...state.authenticated_user,
            ...payload.data.user
        })
        state.access_token = payload.data.token

        localStorage.setItem('access_token', payload.data.token)
        localStorage.setItem('authenticated_user', JSON.stringify(payload.data.user)) 
    },
    LOGOUT_USER: (state, payload) => {
        state.access_token = ""
        state.authenticated_user = Object.assign({}, {})

        localStorage.removeItem("access_token");
        localStorage.removeItem("authenticated_user");
    },
    UPDATE_AUTHENTICATED_USER: (state, payload) => {
        state.authenticated_user = 
        Object.assign({}, {
            ...state.authenticated_user,
            ...payload.user
        })
        state.access_token = payload.token

        localStorage.setItem('access_token', payload.token)
        localStorage.setItem('authenticated_user', JSON.stringify(payload.user)) 
    },
}