export default {
    SET_AUTHENTICATED_USER: (state, payload) => {
        state.authenticated_user = payload.user
        state.access_token = payload.token

        localStorage.setItem('access_token', payload.token)
        localStorage.setItem('authenticated_user', payload.user) 
    }
}