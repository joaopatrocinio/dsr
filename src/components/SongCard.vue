<template>
    <b-card v-bind:img-src="image" img-top class="song-image">
        <b-card-text>
            <h3>{{ artist }}</h3>
            <h6>{{ title }}</h6>
            <div class="d-flex justify-content-around rating-flex mt-3">
                <span class="rating-up-btn" v-b-tooltip.hover title="Liked it" @click="rateSong(1)"><b-icon-emoji-smile></b-icon-emoji-smile></span>
                <span class="rating-neutral-btn" v-b-tooltip.hover title="Meh / Not bad / Not my style" @click="rateSong(2)"><b-icon-emoji-neutral></b-icon-emoji-neutral></span>
                <span class="rating-down-btn" v-b-tooltip.hover title="Disliked it" @click="rateSong(3)"><b-icon-emoji-frown></b-icon-emoji-frown></span>
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    name: "SongCard",
    props: ["_id", "artist", "title", "image"],
    methods: {
        rateSong(rating) {
            if (rating >= 1 && rating <= 3) {
                axios.post("http://localhost:8088/songs/rate", {
                    song_id: this._id,
                    score: rating
                }).then(result => {
                    console.log(result.data)
                }).catch((err) => {
                    console.error(err)
                })
            } else {
                console.error("Invalid rating")
            }
        }
    }
}
</script>

<style scoped>
.song-image {
    width: fit-content;
    max-width: 250px;
}
.song-image > img {
    height: 250px;
    width: 250px;
}
.rating-flex > span {
    padding: 10px;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    text-align: center;
    color: white;
    padding-top: 0.1rem;
    cursor: pointer;
    font-size: 1.8rem;
}
.rating-up-btn {
    background-color: #007bff;
}
.rating-down-btn {
    background-color: #dc3545;
}
.rating-neutral-btn {
    background-color: #6c757d;
    width: 2.5rem!important;
    height: 2.5rem!important;
    padding: 0px!important;
    font-size: 1.5rem!important;
    align-self: center;
}
</style>