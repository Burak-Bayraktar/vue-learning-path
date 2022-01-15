<template>
    <li class="d-flex justify-content-between align-items-center">
        <span>{{item.text}}</span>
        <button @click="$emit('delete-item', item.id)" class="sm red">Sil</button>
    </li>
</template>

<script>
export default {
    props: ["item"],
    emits: ["delete-item"]
}
</script>