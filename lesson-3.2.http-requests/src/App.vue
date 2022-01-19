<template>
  <div class="container">
    <h2>Alışveriş Listesi</h2>
    <hr>
    <div class="my-2">
      <input @keydown.enter="onSave" type="text" placeholder="ne alacaksın?">
    </div>
      <ul>
        <li v-for="item in items" :key="item.createdAt" class="d-flex justify-content-between align-items-center">
          <span>{{item.title}}</span>
          <button @click="onDelete(item)" class="sm red">Sil</button>
        </li>
      </ul>
      <small class="text-red d-flex mt-4 justify-content-end align-items-center">{{itemsCount}} adet alınacak ürün vardır.</small>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/items').then(res => {
      this.items = res.data || [];
    })
  },
  methods: {
    onSave(e) {
      const savedObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false
      }

      axios.post('http://localhost:3000/items', savedObject).then(res => {
        this.items.push(res.data || [])
      })
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(res => {
        console.log(res)
        this.items = this.items.filter(i => i.id !== item.id);
      })
    }
  },
  computed: {
    itemsCount() {
      return this.items.length;
    }
  }
}
</script>