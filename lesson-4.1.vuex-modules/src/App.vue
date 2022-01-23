<template>
  <div>{{ $store.state.mainName }}</div>
  <div>
    {{ $store.state.contact.contactName }}
  </div>
  <p>
    {{contactName}}
  </p>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  created() {
    // console.log(this.$store)
    console.log(this.$store.getters['contact/_contactName'])
  },
  computed: {
    ...mapGetters({
      contactName: 'contact/_contactName'
    })
  }
}
</script>