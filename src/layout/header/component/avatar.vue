<template>
  <div class="avatarItem">
    <el-dropdown
      trigger="click"
      class="example-showcase"
      @command="handleCommand"
    >
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          @error="errorHandler"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item disabled>Hello {{ user }}</el-dropdown-item>
          <el-dropdown-item divided command="outLogin">{{
            $t('login.outLogin')
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const user = ref(localStorage.getItem('username'))
const store = useStore()
const handleCommand = (command) => {
  ElMessage(`click on item ${command}`)
  if (command === 'outLogin') {
    store.dispatch('app/outLogin')
  }
}
const errorHandler = () => true
</script>

<style lang="scss" scoped>
.avatarItem {
  position: absolute; /* 或 fixed，根据需求选择 */
  right: 35px;
  display: flex;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
