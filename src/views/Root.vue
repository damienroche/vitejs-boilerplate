<template>
  <div class="bg-gray-200 h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="my-4">{{ title }}</div>
      <div>Count : {{ main.counter }} </div>
      <div>Computed Double count = {{ doubleCount }}</div>
      <div>Store Getter Double count = {{ main.doubleCount }} </div>
      <button class="bg-gray-400 p-2 rounded text-xs mt-4" @click="increase">Increase count</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMainStore } from './../store'
const main = useMainStore()

const title = ref('Hello world !')
const increase = (() => main.$patch({ counter: main.counter + 1 }))
const doubleCount = computed(() => main.counter * 2)
</script>