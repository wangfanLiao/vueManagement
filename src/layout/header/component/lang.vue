<template>
  <el-dropdown trigger="click" class="lang" @command="handleCommand">
    <span class="el-dropdown-link">
      {{ $t('others.language') }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="lang === 'en'" command="en"
          >English</el-dropdown-item
        >
        <el-dropdown-item :disabled="lang === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

const store = useStore()
const i18n = useI18n()
const lang = ref(store.getters.lang)

const handleCommand = (command) => {
  i18n.locale.value = command
  store.commit('app/setLang', command)
}

watch(
  i18n.locale,
  () => {
    lang.value = store.getters.lang
  },
  { deep: true, immediate: true }
)
</script>

<style>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.lang {
  position: absolute; /* 或 fixed，根据需求选择 */
  right: 90px;
  cursor: pointer;
}
</style>
