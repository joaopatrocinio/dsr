<template>
    <b-card v-bind:img-src="image" img-top class="song-image">
        <b-card-text>
            <h3>{{ artist }}</h3>
            <h6>{{ title }}</h6>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: "SongCard",
    props: ["_id", "artist", "title", "image"]
}
</script>

<style scoped>
.song-image {
    width: fit-content;
}
.song-image > img {
    height: 250px;
    width: 250px;
}
</style>