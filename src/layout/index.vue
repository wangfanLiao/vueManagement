<template>
  <el-container class="app-container">
    <el-aside :width="width" class="sidebar-container">
      <Menu />
    </el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: $store.getters.HumburgerIcon }"
    >
      <el-header><Header /></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from '@/layout/menu/index.vue'
import Header from '@/layout/header/index.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const width = computed(() => {
  return store.getters.HumburgerIcon ? '$sideBarWidth' : '$hideSideBarWidth'
})
</script>

<style lang="scss" scoped>
@import '../styles/sidebar';
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
