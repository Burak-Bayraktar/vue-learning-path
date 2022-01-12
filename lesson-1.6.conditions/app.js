const app = Vue.createApp({
    data() {
        return {
            showContainer: true,
            counter: 0
        }
    },
    computed: {
        handleTextColor() {
            if(this.counter > 0) {
                return { color: 'green'}
            } else if (this.counter < 0) {
                return { color: 'red' }
            }

            return { color: 'blue' }
        },
        handleBgColor() {
            return { 
                'bg-danger text-white': this.counter < 0, 
                'bg-success text-white': this.counter > 0 
            }
        }
    }
}).mount('#app');