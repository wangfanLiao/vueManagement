<template>
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <span
          ><el-input
            v-model="input"
            style="width: 240px"
            placeholder="请输入要查询的月份的阿拉伯数字"
            clearable /></span
        ><span
          ><el-button type="primary" :icon="Search" plain @click="fliter">{{
            $t('table.search')
          }}</el-button></span
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
        <template v-slot="{ row }" v-if="item.prop === 'createTime'">
          {{ $dateFormat(row.createTime) }}
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'startTime'">
          {{ row.startTime }}
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'endTime'">
          {{ row.endTime }}
        </template>
        <template #default="scope" v-else-if="item.prop === 'action'">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-popconfirm
            width="220"
            confirm-button-text="确  认"
            cancel-button-text="不,  我点着玩的."
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="确定要删除这条数据吗?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button size="small" type="danger"> Delete </el-button>
            </template>
          </el-popconfirm>
        </template></el-table-column
      >
    </el-table>

    <el-drawer
      v-model="drawer"
      title="编辑加班记录"
      direction="rtl"
      size="35%"
      destroy-on-close
    >
      <div class="block">
        <span class="demonstration">更新加班时间</span>
        <el-date-picker
          v-model="timeData"
          type="datetimerange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :default-time="defaultTime"
          @change="chooseTime"
        />
      </div>
      <div class="input">
        <el-input
          v-model="editInput"
          style="width: 240px"
          disabled
          placeholder="请选择加班时间"
          ><template #append>小时</template></el-input
        >
        <el-button
          type="primary"
          @click="dialogTableVisible = true"
          :disabled="bool"
          plain
          >确认</el-button
        >
      </div>
      <el-dialog
        v-model="dialogTableVisible"
        title="确认修改?"
        width="800"
        destroy-on-close
        draggable
        overflow
      >
        <el-table :data="drawData" style="width: 100%" border>
          <el-table-column
            property="startTime"
            label="开始时间"
            style="width: 33%"
          />
          <el-table-column
            property="endTime"
            label="结束时间"
            style="width: 33%"
          />
          <el-table-column
            property="overtime"
            label="加班时长(H)"
            style="width: 34%"
          />
        </el-table>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取消</el-button>
            <el-button type="primary" @click="handleEditDraw"> 确认 </el-button>
          </div>
        </template>
      </el-dialog>
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
import { Search, InfoFilled } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import getOvertime from '@/api/getOvertime'
import deleteOvertime from '@/api/deleteOvertime'
import editOvertime from '@/api/editOvertime'
import dayjs from 'dayjs'
import { tableField } from './tablefield'
import { ElMessage } from 'element-plus'
import dateFormat from '@/utils/dateFormat'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const input = ref()
const overtimeList = ref()
const tableData = ref()
const username = { username: localStorage.getItem('username') }
const drawer = ref(false)
const timeData = ref()
const bool = ref(true)
const editInput = ref()
const dialogTableVisible = ref(false)
const drawData = ref()
let id

const defaultTime = [
  new Date(2000, 1, 1, 18, 0, 0),
  new Date(2000, 1, 1, 20, 0, 0)
]

const indexMethod = (index) => {
  return index + 1 + (currentPage.value - 1) * pageSize.value
}

const getUserList = (currentPage, pageSize, arr) => {
  if (currentPage === 1) {
    tableData.value = arr.slice(0, pageSize)
  } else {
    tableData.value = arr.slice(
      (currentPage - 1) * pageSize,
      (currentPage - 1) * pageSize + pageSize
    )
  }
}

const handleEdit = (index, row) => {
  drawer.value = true
  id = row.id
  bool.value = true
  timeData.value = [dayjs(row.startTime), dayjs(row.endTime)]
  editInput.value = row.overtime
  console.log(dayjs(row.startTime))
  console.log(index, row, row.id)
}

const handleEditDraw = async () => {
  dialogTableVisible.value = false
  console.log(drawData.value)
  const editRes = await editOvertime(drawData.value[0])
  ElMessage.info(editRes.meta.message)
  const res = await getOvertime(username)
  const arr = res.data
  arr.reverse()
  overtimeList.value = arr
  total.value = res.data.length
  getUserList(currentPage.value, pageSize.value, overtimeList.value)
  console.log(editRes)
  drawer.value = false
}

const chooseTime = () => {
  if (timeData.value) {
    editInput.value = (timeData.value[1] - timeData.value[0]) / (1000 * 60 * 60)
    drawData.value = [
      {
        id: id,
        username: username.username,
        startTime: dateFormat(timeData.value[0]),
        endTime: dateFormat(timeData.value[1]),
        overtime: editInput.value
      }
    ]
    bool.value = false
  } else {
    editInput.value = null
    bool.value = true
    ElMessage.info('请选择时间')
  }
}

const handleDelete = async (index, row) => {
  const delMess = await deleteOvertime({ id: row.id })
  console.log(delMess)
  if (delMess.meta.status === 200) {
    const res = await getOvertime(username)
    const arr = res.data
    arr.reverse()
    overtimeList.value = arr
    total.value = res.data.length
    getUserList(currentPage.value, pageSize.value, overtimeList.value)
    ElMessage.info(delMess.meta.message)
  } else {
    ElMessage.info('error')
  }
}

onMounted(async () => {
  const res = await getOvertime(username)
  const arr = res.data
  arr.reverse()
  overtimeList.value = arr
  total.value = res.data.length
  getUserList(currentPage.value, pageSize.value, overtimeList.value)
})

const currentChange = () => {
  getUserList(currentPage.value, pageSize.value, overtimeList.value)
}

const fliter = () => {
  let list = []
  if (input.value) {
    overtimeList.value.forEach((element) => {
      if (dayjs(element.createTime).month() + 1 - input.value === 0) {
        list.push(element)
      }
    })
  } else list = overtimeList.value

  if (list.length === 0) {
    ElMessage.error('所查询的月份没有加班记录')
  } else {
    if (input.value) {
      ElMessage.info(`已显示${input.value}月加班数据`)
      getUserList(currentPage.value, pageSize.value, list)
    } else {
      ElMessage.info('已显示全部加班数据')
      getUserList(currentPage.value, pageSize.value, list)
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
.block {
  padding: 5px 0;
  text-align: left;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.block:last-child {
  border-right: none;
}
.block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 16px;
  margin-bottom: 20px;
}
.input {
  padding: 5px 0;
  text-align: left;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
  > * {
    margin-right: 15px;
  }
}
</style>
