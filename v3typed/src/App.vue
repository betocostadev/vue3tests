<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, onMounted, reactive, ref } from 'vue'
import fetchCount from './fetchCount'

interface AppInfo {
  name: string
  slogan: string
}

// We could start count with 0 if the count was locally. But if we would get it from an API, it could be null
// so we will start as null and use typescript
const count = ref<number | null>(null)

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
})

const addCount = (num: number) => {
  if (count.value !== null) {
    count.value += num
  }
}

const cb = (initialCount: number) => {
  count.value = initialCount
}

onMounted(() => {
  fetchCount(cb)
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
  <p>{{ count }}</p>
  <p>
    <button @click="addCount(1)">Add</button>
  </p>
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
