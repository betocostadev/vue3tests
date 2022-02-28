<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../fetchCount'
import ControlBar from './ControlBar.vue'

// It can be used in Vue 2 but with a more verbose code. The props below are Pure TypeScript.
// Could be used this way inside props, but to have a code clearer to read, we can use the interface

interface Props {
  limit: number
  alertMessageOnLimit?: string
}

const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: 'can not go any higher',
})

// We could start count with 0 if the count was locally. But if we would get it from an API, it could be null
// so we will start as null and use typescript
const count = ref<number | null>(null)

const addCount = (num: number) => {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.alertMessageOnLimit)
    } else {
      count.value += num
    }
  }
}

const resetCount = () => {
  count.value = 0
}

const cb = (initialCount: number) => {
  count.value = initialCount
}

onMounted(() => {
  fetchCount(cb)
})
</script>

<template>
  <div>
    <p>Count is: {{ count }}</p>
    <ControlBar @add-count="addCount" @reset-count="resetCount" />
  </div>
</template>
