<template>
    <h1>{{ this.$route.params.userId }}</h1>
    <p>
        Some details...
    </p>
    <button>Geri Dön</button>
</template>
<script>
export default {
    created() {
        console.log(this.$route)
    },
}
</script>