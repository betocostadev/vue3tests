<script setup lang="ts">
// Defined with two parameters, the name of the event, and the payload
// Event names are not string values, they are called Literal Types
// each Literal Type can be used for a single specific value.

const emit = defineEmits<{
  (event: 'add-count', num: number): void
  (event: 'reset-count'): void
}>()
</script>

<template>
  <p>
    <button @click="emit('add-count', 1)">Add</button>
    <button @click="emit('reset-count')">Reset</button>
  </p>
</template>

<style></style>
