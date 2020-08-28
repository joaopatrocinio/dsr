<template>
    <div class="home">
		<div v-if="this.$store.state.auth.loggedIn">
			<h1>Welcome back, {{ this.$store.state.auth.email }}!</h1>
			<AddSong class="mt-4"></AddSong>
			<SongList class="mt-4" v-bind:songs="this.$store.state.songQueue" listName="Your queue"></SongList>
		</div>
		<div v-else>
			<h1>Hello!</h1>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
import AddSong from '@/components/AddSong.vue'
import SongList from '@/components/SongList.vue'
axios.defaults.withCredentials = true
export default {
	name: 'Home',
	components: {
		AddSong,
		SongList
	},
	methods: {
		updateSongs() {
			axios.get(process.env.VUE_APP_API_URL + "/songs/queue")
			.then((res) => {
				this.$store.commit("updateSongQueue", res.data)
			})
		}
	},
	created() {
		this.updateSongs();
	}
}
</script>
