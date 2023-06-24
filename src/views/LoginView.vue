<template>
    <div>
        <form ref="loginForm">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Input email" v-model="credentials.email" required>
    
            <label for="password">Last Name</label>
            <input type="password" id="password" name="password" placeholder="Input password" v-model="credentials.password" required>
        
            <button class="button-success" @click="loginUserButton($event)">Submit</button>
        </form> 
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
            console.log(this.auth.authenticated_user)
            event.preventDefault();
            this.loginUser({ ...this.credentials }).then((res) => {
                this.$router.push(`/users`)
            })
        }
    },
    created() {
        
    },
    mounted(){ 
        console.log('Login view mounted');
    }
}
</script>