<template>
    <div class="d-flex justify-content-between my-3">
        <Filter :checkedItem="this.$store.state.checkedFilter" @set-new-filter="setFilter" />
    </div>
</template>

<script>
import Filter from './Filter.vue'
export default {
    components: {
        Filter
    },
    methods: {
        setFilter(filter) {
            this.$store.commit('handleCheckedFilter', filter)
        }
    },
    emits: ["set-new-filter"]
}
</script>