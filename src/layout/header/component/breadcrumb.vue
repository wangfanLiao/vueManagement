<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item v-for="(pn, index) in pathName" :key="index">
      <span class="no-redirect" v-if="index === pathName.length - 1">{{
        $t(`menus.${pn.name}`)
      }}</span>
      <span class="redirect" v-else @click="handle(pn.path)">{{
        $t(`menus.${pn.name}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const vueRoute = useRoute()
const vueRouter = useRouter()
const pathName = ref()

const handle = (path) => {
  vueRouter.push(path)
}

watch(
  vueRoute,
  () => {
    pathName.value = vueRoute.matched
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss">
.no-redirect {
  color: #97a8be;
  cursor: wait;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: orange;
  }
}
</style>
