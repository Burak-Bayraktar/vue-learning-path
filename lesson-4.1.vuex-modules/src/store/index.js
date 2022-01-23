import { createStore } from "vuex";
import contact from './modules/contact'
import taskManager from './modules/taskManager'

const store = createStore({
    state: {
        mainName: "burakbayraktar"
    },
    mutations: {},
    modules: {
        contact,
        taskManager
    }
});

export default store;