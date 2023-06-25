import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'

router.beforeEach((to, from, next) => {

    console.log(to)
    console.log(Object.keys(to.meta).length == 0, 'checking requiresauth param')
    console.log(!localStorage.getItem('access_token') && !localStorage.getItem('authenticated_user'))
    console.log(localStorage.getItem('access_token'))

    if (Object.keys(to.meta).length == 0 && localStorage.getItem('access_token')) {
        next()
    }

    if (to.fullPath == '/' && localStorage.getItem('access_token') && from.fullPath == '/') {
        console.log('updating')
        store.commit('auth/UPDATE_AUTHENTICATED_USER', {
            token: localStorage.getItem('access_token'),
            user: JSON.parse(localStorage.getItem('authenticated_user'))
        })
    }

    next()
})

createApp(App).use(store).use(router).mount('#app')
