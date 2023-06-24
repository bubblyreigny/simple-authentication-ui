<template>
    <div>
        table
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
            'auth', [
                'fetchUsers'
            ]
        ),
    },
    created() {
        
    },
    mounted(){ 
        this.fetchUsers()
        console.log('Login view mounted');
    }
}
</script>