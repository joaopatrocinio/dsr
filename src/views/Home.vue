<template>
    <div class="home">
		<div v-if="this.$store.state.auth.loggedIn">
			<h1>Welcome back, {{ this.$store.state.auth.email }}!</h1>
			<AddSong class="mt-4"></AddSong>
			<SongList class="mt-4" v-bind:songs="songs" listName="Your queue"></SongList>
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
export default {
	name: 'Home',
	data() {
		return {
			songs: []
		}
	},
	components: {
		AddSong,
		SongList
	},
	methods: {
		updateSongs() {
			axios.get("http://localhost:8088/songs/queue")
			.then((res) => {
				this.songs = res.data;
			})
		}
	},
	created() {
		this.updateSongs();
	}
}
</script>
