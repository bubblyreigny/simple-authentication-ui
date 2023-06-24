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

        commit('SET_AUTHENTICATED_USER', response)
    }
}