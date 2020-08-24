<template>
    <div>
        <b-toast id="successToast" title="Success" static no-auto-hide variant="success" style="max-width: none">
            Nice! Your recommendation is on its way to other users.
        </b-toast>
        <b-toast id="errorToast" title="Error" static no-auto-hide variant="danger" style="max-width: none">
            You have already recommended a song today. Not cool...
        </b-toast>
        <b-overlay :show="adding" rounded="sm">
            <b-card>
                <template v-slot:header>
                    <h5 class="mb-0">Add Song</h5>
                </template>
                
                    <b-card-text>
                        <b-form @submit="addSong">
                            <b-form-input v-model="artist" placeholder="Artist (eg.: Rick Astley)" class="mb-2"></b-form-input>
                            <b-form-input v-model="title" placeholder="Title (eg.: Never Gonna Give you Up)"></b-form-input>
                            <b-button type="submit" class="mt-4" variant="primary"><b-icon-plus></b-icon-plus>Add song</b-button>
                        </b-form>
                    </b-card-text>
            </b-card>
        </b-overlay>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    name: "AddSong",
    data() {
        return {
            artist: "",
            title: "",
            adding: false
        }
    },
    methods: {
        addSong(e) {
            e.preventDefault();
            if (this.artist && this.title) {
                this.adding = true;
                axios.post("http://localhost:8088/songs/add", {
                    artist: this.artist,
                    title: this.title
                }).then(() => {
                    this.artist = "";
                    this.title = "";
                    this.adding = false;
                    this.$bvToast.show('successToast')
                }).catch(() => {
                    this.adding = false;
                    this.$bvToast.show('errorToast')
                })
            }
        }
    }
}
</script>

<style>
#successToast, #errorToast {
    max-width: none !important;
}
.b-toast {
    max-width: none;
}
</style>