import { createStore } from 'vuex'

const store = createStore({
    state: {
        itemList: [
            { id: 1, title: "Masa", type: "Mobilya"},
            { id: 2, title: "Sandalye", type: "Mobilya"},
            { id: 3, title: "TV", type: "Mobilya"},
            { id: 4, title: "Monitör", type: "Elektronik"},
            { id: 5, title: "Bardak", type: "Plastik"},
        ],
        checkedFilter: 'Tümü'
    },
    getters: {
        _filteredItems({itemList, checkedFilter}) {
            if (checkedFilter === 'Tümü') {
                return itemList
            }
            
            return itemList.filter(i => i.type === checkedFilter)
        }
    },
    mutations: {
        newItem(state, payload) {
            state.itemList.push(payload)
        },
        handleCheckedFilter(state,payload) {
            state.checkedFilter = payload
        }
    },
    actions: {
        newItem(context, item) {
            setTimeout(() => {
                context.commit('newItem', item)
            }, 500)
        }
    }
})

export default store