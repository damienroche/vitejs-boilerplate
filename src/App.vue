<template>
  <div class="bg-gray-200 h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="my-4">{{ title }}</div>
      <div>Count : {{ count }}</div>
      <div>Double count = {{ doubleCount }}</div>
      <button class="bg-gray-400 p-2 rounded text-xs mt-4" @click="increase">Increase count</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const title = ref('Hello world !')
const count = ref(0)

const increase = (() => count.value++)
const doubleCount = computed(() => count.value * 2)
</script>