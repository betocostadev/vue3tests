<template>
  <div>
    <p>{{ count }}</p>
    <button @click="resetCounter">Reset</button>
  </div>
  <div>
    <p>Functional count component</p>
    <FuncCount :count="count"/>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

import useAutoCount from './composables/useAutoCount'
import FuncCount from './components/FuncCount'

export default {
  name: 'Vue3Test',
  components: { FuncCount },

  setup() {
    const { count } = useAutoCount(10)
    return { count }
  },

  data() {
    return {
      // count: 0
    }
  },

  methods: {
    resetCounter() {
      this.count = 0
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
