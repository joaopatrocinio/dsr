<template>
    <b-navbar toggleable="lg" type="dark" variant="success" class="mb-4">
        <b-navbar-brand href="/">DSR</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item>
                    <router-link class="nav-link" to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link class="nav-link" to="/about">About</router-link>
                </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                        <span v-if="loggedIn">{{ email }}</span>
                        <span v-else>Not logged in</span>
                    </template>
                    <router-link v-if="!loggedIn" class="dropdown-item" to="/login">Login</router-link>
                    <router-link v-if="!loggedIn" class="dropdown-item" to="/signup">Signup</router-link>
                    <div v-else>
                        <a class="dropdown-item">Profile</a>
                        <a class="dropdown-item" @click="logout">Logout</a>
                    </div>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    name: 'Header',
    data() {
        return {
            searchText: ""
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.loggedIn
        },
        email() {
            return this.$store.state.auth.email
        }
    },
    mounted() {
        axios.get(process.env.VUE_APP_API_URL + "/authentication/verify")
        .then((res) => {
            if (res.data.user) {
                this.$store.state.auth.loggedIn = true;
                this.$store.state.auth.email = res.data.user.email;
            }
        })
    },
	methods: {
		logout() {
            axios.get(process.env.VUE_APP_API_URL + '/authentication/logout')
            .then(response => {
                if (response.status == 200) {
                    this.$store.state.auth.loggedIn = false;
                    this.$store.state.auth.email = "";
                    this.$store.dispatch("clearSongQueue");
                    this.$router.push("/");
                } else {
                    alert("Error")
                }
            });
		}
	}
}
</script>

<style scoped>
a,
a:hover {
	color: inherit;
	text-decoration: none;
	cursor: pointer;
}
</style>