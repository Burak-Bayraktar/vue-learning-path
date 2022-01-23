<template>
    <li v-for="(item, index) in _filteredItems" :key="index">
        {{ item.title }}
    </li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["_filteredItems"])
    }
}
</script>