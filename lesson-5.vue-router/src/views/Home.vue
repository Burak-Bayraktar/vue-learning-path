<template>
    <h1>Home</h1>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods: {
        goToDetails(e) {
            this.$router.push({
                name: 'DetailPage',
                params: {
                    userId: e.target.value
                },
                query: {
                    type: 'DetailAuth',
                    user: 'burakbayraktar'
                }
            })
        }
}

}
</script>