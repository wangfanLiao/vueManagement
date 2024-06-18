<template>
  <div class="guide" @click="handle">
    <el-icon :size="20"><Promotion /></el-icon>
  </div>
</template>

<script setup>
import { Promotion } from '@element-plus/icons-vue'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { driverConfig } from './driverConfig'
import { onMounted, watch } from 'vue'

import { useI18n } from 'vue-i18n'

const i18n = useI18n()

let driverObj

onMounted(() => {
  driverObj = driver(driverConfig(i18n.t))
})

watch(
  i18n.locale,
  () => {
    driverObj = driver(driverConfig(i18n.t))
  },
  { deep: true, immediate: true }
)

const handle = () => {
  driverObj.drive()
}
</script>

<style>
.guide {
  position: absolute;
  right: 250px;
  padding-top: 5px;
}
</style>
