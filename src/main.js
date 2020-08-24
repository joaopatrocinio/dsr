import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

const store = new Vuex.Store({
	state: {
		auth: {
			loggedIn: false,
			email: ""
		}
	},
	mutations: {
		setLoggedIn (state, value) {
			state.auth.loggedIn = value;
		},
		setEmail (state, email) {
			state.auth.email = email;
		}
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
