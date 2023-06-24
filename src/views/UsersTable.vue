<template>
    <div>
        {{ user.usersList }}
        <table>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Postcode</th>
                <th>Actions</th>
            </tr>


            <template v-if="user.usersList.length == 0">
                <tr>
                    <td colspan="7" v-if="user.usersList.length == 0">
                        No data found
                    </td>
                </tr>
            </template>
                <template v-else>
                    <tr v-for="(item) in user.usersList" v-bind:key="item.id">
                        <td>{{ item.first_name }}</td>
                        <td>{{ item.last_name }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.postcode }}</td>
                        <td>
                            <button class="button-info button-sm">Edit</button>
                            <button class="button-danger button-sm" @click="deleteUserButton(item.id)">Delete</button>
                        </td>
                    </tr>
                </template>

        </table>
        <template>
            <div v-if="user.usersList.length == 0">
            </div>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'LoginView',
    components: {

    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            "user",[
                "usersList"
            ]
        ])
    },
    methods: {
        ...mapActions(
            'user', [
                'fetchUsers',
                'deleteUser'
            ]
        ),
        deleteUserButton(user_id) {
            this.deleteUser({ id: user_id }).then((res) => {
                this.fetchUsers()
            });
        }
    },
    created() {
        
    },
    mounted(){ 
        this.fetchUsers()
        console.log('Login view mounted');
    }
}
</script>