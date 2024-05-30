<template>
  <button @click="outLogin">outLogin</button>
  home
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const outLogin = () => {
  store.dispatch('app/outLogin')
}
</script>

<style></style>
