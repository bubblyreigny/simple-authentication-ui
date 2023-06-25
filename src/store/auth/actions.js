import { JsonApiDecoder } from "../../transformers/JsonApiDecoder.js"

import axios from "axios"
export default {
    async loginUser({ commit }, payload) {

        const data = {
            email: payload.email,
            password: payload.password
        }

        try {
            const response = await axios.post(`${process.env.VUE_APP_API_URL}/login`, data , {
                headers: {
                    'Accept': 'application/json'
                }
            })

            commit('SET_AUTHENTICATED_USER', response)
        } catch (err) {
            alert(err.response.data.message)
            throw err
        }
    },

    async logoutUser({ commit }, payload) 
    {
        console.log(localStorage.getItem('access_token'));
        try {
            const response = await axios.post(`${process.env.VUE_APP_API_URL}/logout`, {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    'Accept': 'application/json'
                }
            })

            commit('LOGOUT_USER')
        } catch (err) {
            console.log(err.response.data)
            throw err
        }
    }
}