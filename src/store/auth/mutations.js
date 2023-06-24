export default {
    SET_AUTHENTICATED_USER: (state, payload) => {

        state.authenticated_user = 
        Object.assign({}, {
            ...state.authenticated_user,
            ...payload.data.user
        })
        state.access_token = payload.data.token

        localStorage.setItem('access_token', payload.data.token)
        localStorage.setItem('authenticated_user', payload.data.user) 
    },
    LOGOUT_USER: (state, payload) => {

    }
}