<template>
    <div class="container">
        <h3 class="text-center">Todo App</h3>
        <add-section @add-todo="addItem" />
        <hr class="my-2">
        <list-section @delete-item="deleteItem" />
    </div>
</template>

<script>

import AddSection from './components/AddSection.vue';
import ListSection from './components/ListSection.vue'

export default {
    components: {
        AddSection,
        ListSection
    },
    data() {
        return {
                todoList: [
                { id: 1, text: "Item #2"},
                { id: 2, text: "Item #2.1"},
                { id: 3, text: "Item #2.2"},
                { id: 4, text: "Item #2.3"},
                { id: 5, text: "Item #2.4"},
                { id: 6, text: "Item #2.5"},
            ]
        }
    },
    provide() {
        return {
            todoList: this.todoList
        }
    },
    methods: {
        addItem(todo) {
            console.log(todo)
            if (todo === '') return;

            this.todoList.push({ id: new Date().getTime(), text: todo})
            todo = "";
        },
        deleteItem(id) {
            console.log("hi")
            const itemToDelete = this.todoList.findIndex((item) => item.id === id);
            this.todoList.splice(itemToDelete, 1);
        }
    }    
}
</script>