import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: '/users',
				name: 'users',
				component: () => import('../views/UsersTable.vue')	
			},
			{
				path: '/users/:id',
				name: 'UserEdit',
				component: () => import('../views/UserForm.vue')	
			},
			{
				path: '/users/create',
				name: 'UserCreate',
				component: () => import('../views/UserForm.vue')	
			}
		]
	},
	{	
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
