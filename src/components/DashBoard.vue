<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> | 
            <router-link to="/users">Users</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DashBoard',
    props: {
        msg: String
    },
    mounted() {

    },
    created() {
        
    }
}

</script>