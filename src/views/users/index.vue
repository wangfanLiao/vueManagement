<template>
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <span
          ><el-input
            v-model="input"
            style="width: 240px"
            placeholder="Please input" /></span
        ><span
          ><el-button type="primary" :icon="Search">{{
            $t('table.search')
          }}</el-button></span
        ><span
          ><el-button type="primary" :icon="Upload">
            {{ $t('table.adduser') }}
          </el-button></span
        >
      </div>
    </template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <template #footer>Footer content</template>
  </el-card>
</template>

<script setup>
import { Search, Upload } from '@element-plus/icons-vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<style lang="scss" scoped>
.card-header {
  > * {
    margin-left: 10px;
  }
}
</style>
