<template>
    <div>
        <b-card>
            <template v-slot:header>
                <h5 class="mb-0">{{ listName }}</h5>
            </template>
            <b-card-text>
                <div v-if="songs.length > 0" class="songListDiv">
                    <SongCard v-for="song in songs" :key="song._id" v-bind:title="song.title" v-bind:artist="song.artist" v-bind:_id="song._id" v-bind:image="song.image"></SongCard>
                </div>
                <div v-else>
                    <p class="mb-0">Nothing to see here, move on.</p>
                </div>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import SongCard from '@/components/SongCard.vue'
export default {
    name: "SongList",
    components: {
        SongCard
    },
    props: ["songs", "listName"]
}
</script>

<style scoped>
.songListDiv {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.songListDiv > div {
    margin: 5px;
}
</style>