<template>
    <app-header />
    <div class="flex flex-row">
        <side-bar />
        <app-bookmark-list v-if="bookmarks.length > 0" :bookmarkList="bookmarks" />
        <div v-else>Bookmarks not found...</div>
    </div>
</template>

<script>
import SideBar from '../components/Account/SideBar.vue'
import AppHeader from '../components/shared/appHeader.vue'
export default {
    components: {
        SideBar,
        AppHeader
    },
    data() {
        return {
            bookmarks: []
        }
    },
    created() {
        this.$axios.get('/bookmarks?_expand=category&_expand=user').then((res) => {
            this.bookmarks = res?.data
        })
    },
}
</script>