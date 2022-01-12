const app = Vue.createApp({
    data() {
        return {
            message: 'Örnek'
        }
    },
    methods: {
        updateValue(e) {
            this.message = e.target.value
        }
    }
}).mount('#app');