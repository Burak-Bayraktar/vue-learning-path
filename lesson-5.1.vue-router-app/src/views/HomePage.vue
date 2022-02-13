<template>
    <div class="card p-2">
    <div class="d-flex justify-content-end p-2">
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmarkPage' })">+ Yeni Ekle</button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
          <tr class="col block" v-for="bookmark in bookmarks" :key="bookmark.id">
            <th scope="row">{{ bookmark.id }}</th>
            <td>{{ bookmark.title }}</td>
            <td>
              <a :href="bookmark.url">{{ bookmark.url }}</a>
            </td>
            <td>{{ bookmark.description }}</td>
            <td>
                <button @click="onDelete(bookmark.id)" class="btn btn-sm btn-danger">
                    Sil
                </button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarks: []
    }
  },
  created() {
    this.$axios.get('/bookmarks')
    .then((res) => {
      this.bookmarks = res.data
    })
  },
  methods: {
    onDelete(id) {
      this.$axios.delete(`/bookmarks/${id}`).then(res => {        
        if (res.status === 200) {
          this.bookmarks = [];
        }
      })
    }
  }
}
</script>