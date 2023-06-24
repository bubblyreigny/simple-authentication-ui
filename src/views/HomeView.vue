<template>
	<div class="home">
		<DashBoard v-if="Object.keys(auth.authenticated_user).length != 0 "/>
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<LandingPage v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex';

import DashBoard from '@/components/DashBoard.vue'
import LandingPage from '@/components/LandingPage.vue'
export default {
	name: 'HomeView',
	components: {

    DashBoard,
	LandingPage
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

	},
	mounted() {
		console.log(localStorage.getItem('access_token'))
	},
	created(){

	}
}
</script>