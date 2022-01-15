<template>
    <todo-list :data="todoList" @delete-item="deleteItem" />
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
    inject: ["todoList"]
}
</script>