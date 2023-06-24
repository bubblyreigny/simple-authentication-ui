import { JsonApiDecoder } from "../../transformers/JsonApiDecoder.js"

import axios from "axios"
export default {
    async loginUser({ commit }, payload) {

        const data = {
            email: payload.email,
            password: payload.password
        }

        const response = await axios.post(`${process.env.VUE_APP_API_URL}/login`, data , {
            headers: {
                'Accept': 'application/json'
            }
        })
        console.log(response)
        commit('SET_AUTHENTICATED_USER', response)
    },
    async fetchUsers({ state, commit }) {

        console.log(state)
        console.log(localStorage.getItem('access_token'))
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/user`, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
            }
        });

        let result = JsonApiDecoder.normalize(response);

        console.log(result)

        return console.log('trying to fetch users')
        // const response = await axios.get(`${process.env}`)
    }
}