<template>
  <div class="navbar">
    <Hamburger />
    <Breadcrumb />
    <Avatar />
    <Lang />
    <ScreenFull />
    <Driver />
  </div>
</template>

<script setup>
import Hamburger from '@/layout/header/component/hamburger.vue'
import Breadcrumb from '@/layout/header/component/breadcrumb.vue'
import Avatar from '@/layout/header/component/avatar.vue'
import Lang from '@/layout/header/component/lang.vue'
import ScreenFull from '@/layout/header/component/screenfull.vue'
import Driver from './component/driver/index.vue'
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  > * {
    margin-right: 15px; //子元素间隔
  }
  > *:last-child {
    margin-right: 0;
  }
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
