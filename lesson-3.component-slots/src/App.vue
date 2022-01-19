<template>
  <modal>
      <template #title>
            <h3>header from slot</h3>
      </template>
      <template #content>
          <p class="text-green">
                content from slot. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel quo corporis 
                soluta quia rem maiores perspiciatis vitae quae sed. 
                Praesentium odio assumenda ratione facilis sint blanditiis, iste eligendi corporis.
          </p>
      </template>
      <template #default>
          <p>
            default slot
          </p>
      </template>
  </modal>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
    components: {
        Modal,
    }
}
</script>