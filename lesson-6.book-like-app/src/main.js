import { createApp } from 'vue'
import router from '../router';
import App from './App.vue'
import '../src/assets/style.css'
import appHeader from './components/shared/appHeader.vue'
import appBookmarkList from './components/shared/appBookmarkList'
import instance from './utils/appAxios';
import store from './store';

const app = createApp(App);

app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router)
app.use(store)
app.config.globalProperties.$axios = instance
app.mount('#app')
