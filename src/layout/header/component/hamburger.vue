<template>
  <div class="hamburnger-container">
    <svg-icon :icon="icon" @click="changeIcon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const changeIcon = () => {
  store.commit('app/changeHumberger')
}

const icon = computed(() => {
  return store.getters.HumburgerIcon === true
    ? 'hamburger-opened'
    : 'hamburger-closed'
})
</script>

<style>
.hamburnger-container {
  cursor: pointer;
}
</style>
