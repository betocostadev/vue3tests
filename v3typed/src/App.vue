<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from 'vue'
import Counter from './components/Counter.vue'

interface AppInfo {
  name: string
  slogan: string
}

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
})

// const nextCount = computed(() => {
//   if (count.value !== null) {
//     return count.value + 1
//   }
//   return null
// })

// For inline functions, type inference is able to infer the parameter type, that's why it works without adding the type
// onMounted(() => {
//   fetchCount((initialCount) => {
//     count.value = initialCount
//   })
// })
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <Counter :limit="10" :alert-message-on-limit="'There is a limit'" />
</template>

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
