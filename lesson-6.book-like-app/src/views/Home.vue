<template>
    <app-header />
    <div class="flex flex-row">
        <side-bar @category-changed="updateBookmarkList" />
        <app-bookmark-list :bookmarkList="bookmarks" />
    </div>
</template>

<script>
import SideBar from '../components/Home/Sidebar.vue'
export default {
    components: {
        SideBar,
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
    methods: {
        updateBookmarkList(categoryId) {
            this.$axios.get(`/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`).then((res) => {
                this.bookmarks = res?.data
            })
        }
    }
}
</script>