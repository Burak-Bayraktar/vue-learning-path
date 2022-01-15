<template>
    <label for="todoText"></label>
    <input v-model="todoText" @keydown.enter="sendData" type="text" id="todoText" placeholder="Bir şeyler yazınız...">
</template>

<script>
export default {
    props: {
        myProp: {
            type: Function
        }
    }, 
    data() {
        return {
            todoText: null
        }
    },
    methods: {
        sendData() {
            this.$emit("add-todo", this.todoText)
            this.todoText = null;
        }
    }
}
</script>