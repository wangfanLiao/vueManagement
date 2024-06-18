<template>
  <div class="screenfull" @click="handle">
    <el-tooltip
      class="box-item"
      effect="light"
      :content="
        isFullscreen === true
          ? $t('others.screenfullOff')
          : $t('others.screenfullOn')
      "
      placement="bottom-start"
    >
      <el-button text
        ><el-icon :size="20"
          ><component
            :is="
              isFullscreen === true ? screenfullIcon[1] : screenfullIcon[0]
            " /></el-icon
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import screenfull from 'screenfull'

const screenfullIcon = ref(['FullScreen', 'SwitchButton'])
const isFullscreen = ref(screenfull.isFullscreen)
const changeIcon = () => {
  isFullscreen.value = screenfull.isFullscreen
}
const handle = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
onMounted(() => {
  screenfull.on('change', changeIcon)
})

onBeforeMount(() => {
  screenfull.off('change')
})
</script>

<style lang="scss" scoped>
.screenfull {
  cursor: pointer;
  position: absolute;
  right: 180px;
  padding-top: 3px;
}
</style>
