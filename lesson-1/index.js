const app = Vue.createApp({
    data() {
        return {
            title: "Vue js Bootcamp 1.gün",
            coords: {
                x: 0,
                y: 0,
            },
            content: {
                url: "http://www.google.com",
                target: '_blank',
                alt: 'link',
                text: 'örnek url',
                burak: 'burak'
            }
        }
    },
    methods: {
        changeTitle(text="Bu değişmiş bir title bilgisi") {
            this.title = text;
        },
        updateCoords(message, event) {
            this.changeTitle(`${event.x} ${event.y}`)
            this.coords = {
                x: event.x,
                y: event.y,
            }
        }
    }
}).mount('#app');