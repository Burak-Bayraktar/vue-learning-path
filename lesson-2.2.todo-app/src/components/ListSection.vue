<template>
    <todo-list :data="todoList" @delete-item="$emit('delete-item', $event)" />
    <result-bar :item-count="todoList.length" />
</template>

<script>
    import TodoList from '@/components/TodoList';
    import ResultBar from './ResultBar.vue';

export default {
    components: {
        TodoList,
        ResultBar
    },
    inject: ["todoList"],
    emits: ["delete-item"]
}
</script>