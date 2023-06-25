<template>
    <div class="login-form-container">
        <div class="login-form-outline">
            <form ref="loginForm" class="login-form" @submit="loginUserButton">
                <h2>Login</h2>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Input email" v-model="credentials.email" required>

                <label for="password">Last Name</label>
                <input type="password" id="password" name="password" placeholder="Input password" v-model="credentials.password" required>

                <button class="float-left button-success" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
// import { Form, Field, ErrorMessage } from 'vee-validate';
import { mapState, mapActions } from 'vuex';
export default {
    name: 'LoginView',
    components: {
    },
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapState([
            "auth",[
                "authenticated_user"
            ]
        ])
    },
    methods: {
        ...mapActions(
            'auth',[
                'loginUser',
                'fetchUsers'
            ]
        ),
        loginUserButton(event){
            event.preventDefault();
            this.loginUser({ ...this.credentials }).then((res) => {
                this.$router.push(`/`)
            }).catch(err => {
                console.log(err.response)
            })
        },
    },
    created() {
        
    },
    mounted(){ 
        console.log('Login view mounted');
    }
}
</script>