<template>
    <app-header />
    <div class="flex flex-row">
        <side-bar />
        <app-bookmark-list />
    </div>
</template>

<script>
import SideBar from '../components/Home/Sidebar.vue'
export default {
    components: {
        SideBar,
    }
}
</script>