<template>
  <div class="container">
    <AppHeader />
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bugün component ve VUE CLI konularını görüyoruz.</p>
  </div>

  <CounterItem></CounterItem>
  <CounterItem />
  <counter-item></counter-item>
</template>

<script>
  import CounterItem from './components/CounterItem.vue'

  
  export default {
    components: {
      CounterItem,
    }  
  }
</script>