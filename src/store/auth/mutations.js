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
        return console.log(payload.data.user, localStorage.getItem('authenticated_user'), 'SETTING AUTH USER')
    },
    LOGOUT_USER: (state, payload) => {

    },
    UPDATE_AUTHENTICATED_USER: (state, payload) => {

        console.log(payload.user, 'setting updated user creds')
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