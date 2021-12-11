import { ref, onMounted } from '@vue/runtime-core'

// Composition function
export default function useAutoCount(startAt) {
  const count = ref(startAt)

  onMounted(() => {
    setInterval(() => count.value += 1, 1000)
  })

  return { count }
}