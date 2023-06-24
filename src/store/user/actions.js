import axios from "axios"
import { JsonApiDecoder } from "../../transformers/JsonApiDecoder.js"

export default {
    async fetchUser({ state, commit }) {


        const response = await axios.get(`${process.env.VUE_APP_API_URL}/user`, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
            }
        });

        let result = JsonApiDecoder.normalize(response);

        console.log(result)

        return console.log('trying to fetch user')
    },

    async fetchUsers({ state, commit }) {

        console.log(state)
        console.log(localStorage.getItem('access_token'))
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

    async deleteUser({ commit }, payload) {
        const response = await axios.delete(`${process.env.VUE_APP_API_URL}/user/${payload.id}/delete`, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('access_token')}` 
            }
        });

        let result = JsonApiDecoder.normalize(response);

        console.log(result)
        
        commit('SET_USERS_LIST', result)
    }
}