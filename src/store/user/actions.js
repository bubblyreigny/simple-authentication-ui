import axios from "axios"
import { JsonApiDecoder } from "../../transformers/JsonApiDecoder.js"

export default {
    async fetchUser({ state, commit }, payload) {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/user/${payload.id}`, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
            }
        });

        let result = JsonApiDecoder.normalize(response);

        console.log(result)

        commit('SET_CURRENT_USER', result)
    },

    async fetchUsers({ state, commit }) {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/user`, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
            }
        }).catch(err => {
            console.log(err.reponse.data)
            throw err
        });

        let result = JsonApiDecoder.normalize(response);

        console.log(result)
        
        commit('SET_USERS_LIST', result)
    },

    async createUser ({ state, commit }, payload) {
        try {
            const response = await axios.post(`${process.env.VUE_APP_API_URL}/user/store`, payload, {
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
                }
            })

            let result = JsonApiDecoder.normalize(response);
            return response
        } catch (err) {
            commit('SET_FORM_ERRORS', err.response.data.errors)
            return err.response.status
        }

    },

    async updateUser ({ state, commit }, payload) {
        try {
            const response = await axios.patch(`${process.env.VUE_APP_API_URL}/user/${payload.id}/update`, payload, {
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
                }
            })

            let result = JsonApiDecoder.normalize(response);

        } catch (err) {
            commit('SET_FORM_ERRORS', err.response.data.errors)
            return err.response.status
        }
    },

    async deleteUser({ commit }, payload) {
        const response = await axios.delete(`${process.env.VUE_APP_API_URL}/user/${payload.id}/delete`, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
            }
        });

        let result = JsonApiDecoder.normalize(response);

        console.log(result)
        
        commit('SET_USERS_LIST', result)
    },

    resetCurrentUserState({ commit }, payload) {
        console.log('resseting current user')
        commit('RESET_CURRENT_USER')
        commit('RESET_FORM_ERRORS')   
    }
}