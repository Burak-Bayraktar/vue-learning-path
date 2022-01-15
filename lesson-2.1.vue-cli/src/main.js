import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import AppHeader from "@/components/AppHeader"
const app = createApp(App)

app.component("AppHeader", AppHeader);

app.mount('#app')
