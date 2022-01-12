const app = Vue.createApp({
    data() {
        return {
            title: 'Test başlığı',
            itemList: []
        }
    },
    beforeMount() {
        console.log("beforeMount")
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6,7];
        }, 2000)
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")     
    }
})

app.mount('#app');

setTimeout(() => {
    app.unmount();
}, 5000)