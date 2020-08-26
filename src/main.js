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
		},
		songQueue: []
	},
	mutations: {
		setLoggedIn (state, value) {
			state.auth.loggedIn = value;
		},
		setEmail (state, email) {
			state.auth.email = email;
		},
		updateSongQueue (state, array) {
			state.songQueue = array;
		},
		removeFromQueue (state, _id) {
			// to remove a song after it's been rated
			// next time the queue is fetched it won't come up again
			const index = state.songQueue.map(x => {
				if (x._id == _id) return state.songQueue.indexOf(x);
			});
			state.songQueue.splice(index, 1);
		}
	},
	actions: {
		clearSongQueue() {
			this.commit("updateSongQueue", []);
		}
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
