<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
        <bookmark-list-item v-for="bookmarkList in bookmarkList" :key="bookmarkList.id" :item="bookmarkList" />
        </div>
    </div>
</template>

<script>
    import BookmarkListItem from './BookmarkListItem.vue'
export default {
    components: {
        BookmarkListItem
    },
    props: {
        bookmarkList: {
            type: Array
        }
    },
}
</script>