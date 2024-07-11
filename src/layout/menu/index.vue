<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    unique-opened
    router
    :collapse="$store.getters.HumburgerIcon"
  >
    <el-sub-menu
      collapse-transition
      :index="item.order"
      v-for="(item, index) in menuList"
      :key="item.id"
    >
      <template #title>
        <el-icon><component :is="subMenuIcon[index]" /></el-icon>
        <span>{{ $t(`menus.${item.path}`) }}</span>
      </template>
      <!-- <router-link
        v-for="child in item.children"
        :to="child.path"
        :key="child.id"
        ><el-menu-item :index="child.path">{{
          child.authName
        }}</el-menu-item></router-link
      > -->

      <el-menu-item
        v-for="child in item.children"
        :key="child.id"
        :index="child.path"
        @click="savePath(child.path)"
      >
        <template #title>
          <el-icon><component :is="itemIcon[0]" /></el-icon>
          <span>{{ $t(`menus.${child.path}`) }}</span>
        </template></el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import menu from '@/api/menu.js'
import { ref } from 'vue'

const subMenuIcon = ref([
  'User',
  'Unlock',
  'Goods',
  'ShoppingCartFull',
  'PieChart'
])
const itemIcon = ref(['Menu'])
const defaultActive = ref(sessionStorage.getItem('path') || 'users')
const menuList = ref()
const getData = async () => {
  const res = await menu()
  menuList.value = res.data
  return res
}
getData()

const savePath = (path) => {
  sessionStorage.setItem('path', path)
}
</script>

<style></style>
