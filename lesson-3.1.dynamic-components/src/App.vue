<template>
    <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
            <button class="red" @click="activeComponent = 'Red'">Red</button>
            <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
            <button class="green" @click="activeComponent = 'Green'">Green</button>
        </div>
        <!-- <red class="mb-2" />
        <blue class="mb-2" />
        <green class="mb-2" /> -->
        <keep-alive>
            <component :is="activeComponent" msg="Red">
                <h3 class="bg-green text-white">Green Component</h3>       
            </component>
        </keep-alive>
    </div>
</template>

<script>
import Red from './components/Red.vue'
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'

export default {
    components: {
        Red, Blue, Green
    },
    data() {
        return {
            activeComponent: 'Red'
        }
    }
}
</script>