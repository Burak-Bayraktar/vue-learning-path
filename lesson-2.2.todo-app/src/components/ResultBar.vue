<template>
    <!-- <small class="mt-2 d-flex justify-content-end green">{{ todoList.length }} adet ToDo vardır.</small> -->
    <small class="mt-2 d-flex justify-content-end green">{{itemCount}} adet ToDo vardır.</small>
</template>

<script>
export default {
    props: ["itemCount"]
}
</script>