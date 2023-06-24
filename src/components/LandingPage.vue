<template>
    <div>
        <h1>Simple Authentication CMS and API</h1>
        <button class="button-base button-info" @click="clickLoginButton()">Click here to login</button>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
    props: {
        msg: String
    },
    methods: {
        clickLoginButton() {
            this.$router.push(`/login`)
        }
    },
    mounted() {

    },
    created() {
        
    }
}

</script>