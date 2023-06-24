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

        ])
    },
    methods: {
        ...mapActions(
            'auth',[
                'loginUser'
            ]
        ),
        loginUserButton(event){
            event.preventDefault();
            console.log(this.$store)
            this.loginUser({ ...this.credentials }).then((res) => {
                // this.$store
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