<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <el-icon class="is-loading">
          <Loading />
        </el-icon>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-icon class="is-loading">
          <Loading />
        </el-icon>
        <el-input v-model="form.password" />
      </el-form-item>
      <el-button type="danger" plain @click="loginVerify">Login</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Loading } from '@element-plus/icons-vue'
import { mapState } from 'vuex'
import store from '@/store/index'

const formRef = ref()
const form = ref({
  name: 'admin',
  password: '123456'
})
const state = mapState({
  getState: (state) => console.log(state)
})
function loginVerify() {
  console.log(state.getState)
  console.log(store)
  console.log(this.$store)
}
</script>

<style lang="scss" scoped></style>
