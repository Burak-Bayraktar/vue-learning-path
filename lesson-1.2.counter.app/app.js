const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    methods: { },
    computed: {
        getCounterResult() {
            console.log("Counter1 çalıştı")
            return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        },
        getCounter2Result() {
            console.log("Counter2 çalıştı")
            return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(newValue, oldValue);
        },
        getCounterResult(newValue, oldValue) {
            console.log(newValue, oldValue)
        }
    }
}).mount('#app')