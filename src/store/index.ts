import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    counter: 2,
  }),
  getters: {
    doubleCount() {
      return this.counter * 2
    },
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1
    },
  },
  actions: {
    reset() {
      this.counter = 0
    },
  },
})