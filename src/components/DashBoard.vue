<template>
    <div>
        <nav>
            <div class="float-left">
                <router-link to="/">Home</router-link> | 
                <router-link to="/users">Users</router-link>
            </div>
            <div class="float-right">
                <button class="button-secondary" @click="logoutUserButton()">Logout</button>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'DashBoard',
    props: {
        msg: String
    },
    computed: {
		...mapState([
			"auth",[
				"authenticated_user",
				"access_token",
			]

		])
	},
    methods: {
        ...mapActions(
            'auth',[
                'logoutUser',
            ]
        ),
        logoutUserButton() {
            this.logoutUser()
        }
    },
    mounted() {

    },
    created() {
        
    }
}

</script>