<template>
    <select v-model="selectedItemType">
        <option
            v-for="itemType in itemTypes" 
            :key="itemType.id" 
            :value="itemType.type">
            {{ itemType.type }}
        </option>
    </select>
    <div class="d-flex">
        <input style="height: auto" v-model="item" @keydown.enter="addItem" type="text">
        <button style="whiteSpace: nowrap; height: auto" @click="addItem">Ürün Ekle</button>
    </div>
</template>

<script>
import { itemTypes } from '../itemTypes.json'
export default {
    data() {
        return {
            item: '',
            selectedItemType: '',
            itemTypes
        }
    },
    methods: {
        addItem() {
            if(this.item === '' || this.selectedItemType === '') return;

            const itemToAdd = {
                id: new Date().getTime(), 
                title: this.item, 
                type: this.selectedItemType 
            }
            this.$store.dispatch("newItem", itemToAdd)
            this.item = ''
        }
    }
}
</script>