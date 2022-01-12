const app = Vue.createApp({
    data() {
        return {
            todoList: [
                { id: 1, text: "Vue bootcamp Hafta 1", completed: false},
                { id: 2, text: "Vue bootcamp Hafta 2", completed: false},
                { id: 3, text: "Vue bootcamp Hafta 3", completed: false},
                { id: 4, text: "Vue bootcamp Hafta 4", completed: false},
                { id: 5, text: "Vue bootcamp Hafta 5", completed: false},
                { id: 6, text: "Vue bootcamp Hafta 6", completed: false},
                { id: 7, text: "Vue bootcamp Hafta 7", completed: false},
            ],
        }
    },
    methods: {
        addTodo(event) {             
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false
            });

            event.target.value = "";
        },
        removeItem(todoItem) {
            console.log(todoItem.id)
            this.todoList = this.todoList.filter(todo => todo.id !== todoItem.id)
        }
    },
    computed: {
        completedItemCount() {
            return this.todoList.filter((t) => t.completed).length
        },
        unCompletedItemCount() {
            return this.todoList.filter((t) => !t.completed).length
        }
    }
}).mount('#app');