<template>
    <ul>
        <todo-list-item 
            v-for="todo in todoList" 
            :key="todo.id" 
            :item="todo" 
            @delete-item="$emit('delete-item', $event)" 
        />
    </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
    // props: ["data", "deleteItem"],
    // props: {
    //     todoList: {
    //         type: String,
    //         required: false,
    //         default: ""
    //     }
    // },
    inject: ["todoList"],
    components: {
        TodoListItem
    },
    emits: ["delete-item"]
}
</script>