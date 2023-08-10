import { ref } from 'vue'
import { defineStore } from 'pinia'
import homepageData from '../data/homepage.json'

export const useHomepageStore = defineStore('homepage', () => {
  const homepage = ref(homepageData)

  return { homepage }
})