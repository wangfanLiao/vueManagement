<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" :rules="rules" class="loginForm">
      <div class="title-container">
        <h3 class="title">
          {{ $t('login.title')
          }}<el-icon><component :is="iconName[1]" /></el-icon>
        </h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="form.username" class="inputItem">
          <template #prepend
            ><el-icon><component :is="iconName[0]" /></el-icon
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="Please input password"
          class="inputItem"
          show-password
          ><template #prepend><svg-icon icon="password"></svg-icon></template
        ></el-input>
      </el-form-item>
      <el-button
        type="danger"
        plain
        @click="handleLogin"
        class="login-button"
        >{{ $t('login.btnTitle') }}</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const iconName = ref(['User', 'SwitchFilled'])
const store = useStore()
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
      store.dispatch('app/login', form.value)
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.loginForm {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.inputItem {
  background: transparent;
  border: 0px;
  appearance: none;
  border-radius: 0px;
  padding: 5px 0px 5px 0px;
  color: $light_gray;
  height: 50px;
  caret-color: #2d3a4b;
}

.login-button {
  width: 100%;
  box-sizing: border-box;
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 35px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
