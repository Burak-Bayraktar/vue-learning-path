<template>
    <h3 class="bg-red text-white">{{ msg }}</h3>
    <input type="text">
</template>

<script>
export default {
    props: ["msg"],
    mounted() {
        console.log('RED mounted')
    },
    activated() {
        console.log('RED activated')
    },
    deactivated() {
        console.log('RED deactivated')
    }
}
</script>