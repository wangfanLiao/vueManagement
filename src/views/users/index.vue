<template>
  <el-card>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple">
          <el-statistic title="部门人数" :value="outputValue" /></div
      ></el-col>

      <el-col :span="8"
        ><div class="grid-content ep-bg-purple">
          <el-statistic title="本月共加班" :value="outputValue" /></div
      ></el-col>
    </el-row>
  </el-card>
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <span
          ><el-input
            v-model="input"
            style="width: 240px"
            placeholder="请输入姓名"
            clearable /></span
        ><span
          ><el-button type="primary" :icon="Search" plain @click="fliter">{{
            $t('table.search')
          }}</el-button></span
        ><span
          ><el-button type="primary" :icon="Download" plain @click="handleDown">
            Download
          </el-button></span
        >
      </div>
    </template>

    <el-table :data="tableData" height="100%" stripe style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="80px"
        :index="indexMethod"
      />
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in tableField"
        :key="index"
        :index="index"
        :fixed="item.prop === 'action' ? 'right' : undefined"
        :width="item.width"
      >
        <template v-slot="{ row }" v-if="item.prop === 'username'">
          {{ name(row.username) }}
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          {{ $dateFormat(row.create_time) }}
        </template>
        <template #default="scope" v-else-if="item.prop === 'action'">
          <el-button
            type="primary"
            @click="handleRow(scope.$index, scope.row)"
            plain
          >
            加班明细
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-drawer
      v-model="drawer"
      :title="drawerUsername"
      direction="rtl"
      size="50%"
      destroy-on-close
    >
      <el-table :data="drawerDate" stripe style="width: 100%" border>
        <el-table-column prop="createTime" label="记录时间" style="width: 28%"
          ><template #default="scope">{{
            $dateFormat(scope.row.createTime)
          }}</template></el-table-column
        >
        <el-table-column prop="startTim" label="加班开始时间" style="width: 25%"
          ><template #default="scope">{{
            scope.row.startTime
          }}</template></el-table-column
        >
        <el-table-column prop="endTime" label="加班结束时间" style="width: 25%"
          ><template #default="scope">{{
            scope.row.endTime
          }}</template></el-table-column
        >
        <el-table-column
          prop="overtime"
          label="加班时长(H)"
          style="width: 22%"
        ></el-table-column>
      </el-table>
    </el-drawer>

    <template #footer
      ><el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        background
        layout="prev, pager, next"
        @current-change="currentChange"
      ></el-pagination
    ></template>
  </el-card>
</template>

<script setup>
import { Search, Download } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useTransition } from '@vueuse/core'
import users from '@/api/users'
import getOvertimeAll from '@/api/getOvertimeAll'
import getOvertimeOne from '@/api/getOvertime'
import handleData from '@/utils/handleDbData'
import { tableField } from './tablefield'

import { ElMessage } from 'element-plus'
import downFile from '@/utils/xlsxTool'
import name from './map/nameMap'

const currentPage = ref(1)
const pageSize = ref(6)
const total = ref(0)
const input = ref()
let list = []
const tableData = ref()
const source = ref(0)
const drawer = ref(false)
const drawerUsername = ref()
const drawerDate = ref()

const outputValue = useTransition(source, {
  duration: 1500
})

const indexMethod = (index) => {
  return index + 1 + (currentPage.value - 1) * pageSize.value
}

const getUserList = (currentPage, pageSize, arr) => {
  total.value = arr.length
  source.value = arr.length
  if (currentPage === 1) {
    tableData.value = arr.slice(0, pageSize)
  } else {
    tableData.value = arr.slice(
      (currentPage - 1) * pageSize,
      (currentPage - 1) * pageSize + pageSize
    )
  }
}

onMounted(async () => {
  const userList = await users()
  const overtimeLis = await getOvertimeAll()
  list = handleData(userList.data, overtimeLis.data)
  getUserList(currentPage.value, pageSize.value, list)
})

const handleDown = () => downFile(list)

const handleRow = async (index, row) => {
  const list = await getOvertimeOne({ username: row.username })
  drawer.value = true
  drawerUsername.value = `${name(row.username)}的加班详情`
  drawerDate.value = list.data
}

const currentChange = () => {
  getUserList(currentPage.value, pageSize.value, list)
}

const fliter = () => {
  let fliterList = []
  if (input.value) {
    list.forEach((element) => {
      if (name(element.username) === input.value) {
        fliterList.push(element)
      }
    })
  } else fliterList = list

  if (fliterList.length === 0) {
    ElMessage.error('用户不存在')
  } else {
    if (input.value) {
      ElMessage.info(`已显示${input.value}的加班数据`)
      getUserList(currentPage.value, pageSize.value, fliterList)
    } else {
      ElMessage.info('已显示全部加班数据')
      getUserList(currentPage.value, pageSize.value, fliterList)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  > * {
    margin-left: 10px;
  }
}
</style>
