import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{	
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	},
	{
		path: '/users',
		name: 'users',
		component: () => import('../views/UsersTable.vue')	
	},
	{
		path: '/user/:id',
		name: 'UserEdit',
		component: () => import('../views/UserForm.vue')	
	},
	{
		path: '/user/create',
		name: 'UserCreate',
		component: () => import('../views/UserForm.vue')	
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
