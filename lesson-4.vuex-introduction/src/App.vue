<template>
  <div class="container">
    <AddItemInput />
    <Filters />
    <ItemList />
</div>
</template>

<script>
import AddItemInput from './components/AddItemInput.vue'
import ItemList from './components/ItemList.vue'
import Filters from './components/Filters/Filters.vue'

export default {
  data() {
    return {
      item: ''
    }
  },
  components: {
    AddItemInput,
    ItemList,
    Filters
  },  
}
</script>