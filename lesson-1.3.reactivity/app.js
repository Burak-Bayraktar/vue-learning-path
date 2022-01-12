const app = Vue.createApp({
    data() {
        return {
            search: '',
            itemList: ['elma', 'armut', 'çilek'],
            filteredList: []
        }
    },
    methods: {
        searchList() {
            this.filteredList = this.itemList.filter(i => i.includes(this.search))
        }
    }
}).mount('#app');