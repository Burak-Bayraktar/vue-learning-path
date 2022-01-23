<template>
        <div v-for="filter in filters" :key="filter.id" class="d-flex align-items-center radio-item">
            <input @change="$emit('set-new-filter', $event.target.id)" :checked="filter.type == checkedItem" type="radio" name="filters" :id="filter.type">
            <label :for="filter.type">{{filter.type}}</label>
        </div>
</template>

<script>
import { filters } from './AllFilters.json'

export default {
    props: ["checkedItem"],
    data() {
        return {
            filters
        }
    },
    emits: ["set-new-filter"]
}
</script>