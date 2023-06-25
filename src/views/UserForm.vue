<template>
    <div>
        <div>
            <span>{{ formName }} User</span>

            <div class="alert-container">
                <template v-if="Object.keys(user.errors).length > 0">
                    <div class="alert" v-for="(item, idx) in user.errors" v-bind:key="idx" :id="`alert_${idx}`">
                        <span class="closebtn" @click="removeAlert(idx)">&times;</span>
                        <span>
                            {{ item[0] }}
                        </span>
                    </div>
                </template>
            </div>
            <form ref="userForm">
                <label for="first_name">First name</label>
                <input type="text" id="first_name" name="first_name" placeholder="Input first name" v-model="user.currentUser.first_name">
                
                <label for="last_name">Last name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Input last name" v-model="user.currentUser.last_name">
    
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Input email" v-model="user.currentUser.email">
    
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Input password" v-model="user.currentUser.password">
    
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Input username" v-model="user.currentUser.username">
    
                <label for="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Input address" v-model="user.currentUser.address">
    
                <label for="postcode">Postcode</label>
                <input type="text" id="postcode" name="postcode" placeholder="Input postcode" v-model="user.currentUser.postcode">
    
            </form>
    
            <button class="button-base button-secondary" @click="redirectToTable()">
                Cancel
            </button>
    
            <button class="button-base button-success" @click="upsertUserButton()">
                Save
            </button>
        </div>
    </div>
</template>

<script>
import user from '@/store/user';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'UserForm',
    components: {},
    data () {
        return {

        }
    },
    computed: {
        ...mapState([
            "user", [
                "currentUser",
                "errors"
            ]
        ]),
        formName() {
            if (Object.prototype.hasOwnProperty.call(this.$route.params, 'id')) {
                return 'Edit'
            }
            return 'Create'
        }
    },
    methods: {
        ...mapActions(
            'user',[
                'fetchUser',
                'updateUser',
                'createUser',
                'resetCurrentUserState'
            ]
        ),
        upsertUserButton() {
            const payload = {
                ...this.user.currentUser
            }

            if (Object.prototype.hasOwnProperty.call(this.$route.params, 'id')) {
                return this.updateUser({ ...payload, id: this.$route.params.id })
                    .then(res => {
                        this.$router.push('/users')
                        setTimeout(() => {
                            alert('user updated!')
                        }, 200);
                    })
            }

            return this.createUser({ ...payload }).then(res => {
                if (res != 422) {
                    this.$router.push('/users')
                    setTimeout(() => {
                        alert('user created!')
                    }, 200);
                }
            })
        },
        redirectToTable() {
            return this.$router.push(`/users`)
        },
        removeAlert(id) {
            document.getElementById(`alert_${id}`).remove()
        }
    },
    mounted() {
        this.resetCurrentUserState()
        if (Object.prototype.hasOwnProperty.call(this.$route.params, 'id')) {
            this.fetchUser({ id: this.$route.params.id })
        }
    },
    created() {

    }
}
</script>