<template>
  <div class="login-container">
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      class="login-form"
      label-width="auto"
      style="max-width: 600px"
    >
      <div class="title-container">
        <h3 class="title">
          用户登录<el-icon><SwitchFilled /></el-icon>
        </h3>
      </div>
      <el-form-item label="UserName" prop="username" class="elFormItem">
        <el-input v-model="form.username">
          <template #prepend
            ><el-icon class="is-loading"> <Loading /> </el-icon
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <!-- <el-icon class="is-loading">
            <Loading />
          </el-icon> -->

        <el-input
          v-model="form.password"
          type="password"
          placeholder="Please input password"
          show-password
          ><template #prepend><svg-icon icon="password"></svg-icon></template
        ></el-input>
      </el-form-item>

      <el-button type="danger" plain @click="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Loading, SwitchFilled } from '@element-plus/icons-vue'
import login from '@/api/login.js'

const formRef = ref(null)
const form = ref({
  username: 'wly',
  password: '123456'
})
const rules = reactive({
  username: [
    {
      required: true,
      message: 'Please input Activity username',
      trigger: 'blur'
    },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity password',
      trigger: 'blur'
    },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ]
})

const handleLogin = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      login(form.value)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.title-container {
  position: relative;
  width: 120px;
  left: 0px;
  top: 0px;
  border: 0px solid #e90a4d;
}
.elFormItem {
  position: relative;
  top: 5px;
  border: 0px solid #e90a4d;
}
</style>
