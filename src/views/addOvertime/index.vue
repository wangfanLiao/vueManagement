<template>
  <el-row>
    <el-col :span="24">
      <div class="block">
        <span class="demonstration">选择加班时间</span>
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
          v-model="input"
          style="width: 240px"
          disabled
          placeholder="请选择加班时间"
          ><template #append>小时</template></el-input
        >
        <el-button
          type="success"
          @click="dialogTableVisible = true"
          :disabled="bool"
          plain
          >确认</el-button
        >
      </div>
    </el-col>
  </el-row>
  <el-dialog
    v-model="dialogTableVisible"
    title="确认提交?"
    width="800"
    destroy-on-close
    draggable
    overflow
  >
    <el-table :data="data" style="width: 100%" border>
      <el-table-column
        property="startTime"
        label="开始时间"
        style="width: 33%"
      />
      <el-table-column property="endTime" label="结束时间" style="width: 33%" />
      <el-table-column
        property="overtime"
        label="加班时长(H)"
        style="width: 34%"
      />
    </el-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAdd"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
  <el-row>
    <el-col :span="12">
      <div class="timeline">
        <h2>{{ content }}</h2>
        <el-timeline style="max-width: 460px">
          <el-timeline-item
            v-for="(item, index) in overtimeList"
            :key="index"
            :timestamp="dateFormat(item.createTime)"
            placement="top"
          >
            <el-card>
              <h4>加班时长{{ item.overtime }}H</h4>

              <p>开始时间{{ item.startTime }}</p>
              <p>结束时间{{ item.endTime }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div></el-col
    >
    <el-col :span="12"
      ><div class="el-statistic">
        <el-statistic title="本月加班次数" :value="times" />
        <el-statistic title="本月加班时长" :value="nowMonthOt" /></div
    ></el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dateFormat from '@/utils/dateFormat'
import addOvertime from '@/api/addOvertime'
import getOvertime from '@/api/getOvertime'
import { ElMessage } from 'element-plus'
import { useTransition } from '@vueuse/core'
import handleData from '@/utils/handleDbData'

let handleres
const dialogTableVisible = ref(false)
const content = ref()
const timesSource = ref(0)
const nowMonthOtSource = ref(0)
const timeData = ref()
const input = ref()
const bool = ref(true)
const overtimeList = ref()
const data = ref()

const times = useTransition(timesSource, {
  duration: 1500
})

const nowMonthOt = useTransition(nowMonthOtSource, {
  duration: 1500
})

const defaultTime = [
  new Date(2000, 1, 1, 18, 0, 0),
  new Date(2000, 1, 1, 20, 0, 0)
]

const username = { username: localStorage.getItem('username') }

const chooseTime = () => {
  if (timeData.value) {
    input.value = (timeData.value[1] - timeData.value[0]) / (1000 * 60 * 60)
    data.value = [
      {
        username: username.username,
        startTime: dateFormat(timeData.value[0]),
        endTime: dateFormat(timeData.value[1]),
        overtime: input.value
      }
    ]
    bool.value = false
  } else {
    input.value = null
    bool.value = true
    ElMessage.info('请选择时间')
  }
}

const handleAdd = async () => {
  const res = await addOvertime(data.value[0])
  ElMessage(res.meta.message)
  getOvertimeList()
  dialogTableVisible.value = false
  bool.value = true
  timeData.value = null
}

const getOvertimeList = async () => {
  const res = await getOvertime(username)
  handleres = handleData([username], res.data)
  timesSource.value = handleres[0].times
  nowMonthOtSource.value = handleres[0].nowMonthOt
  if (res.data.length === 0) {
    content.value = '无最近提交记录'
  } else {
    content.value = '最近提交记录'
    const arr = res.data
    arr.reverse()
    overtimeList.value = arr.slice(0, 3)
  }
}

onMounted(() => {
  getOvertimeList()
})
</script>

<style lang="scss" scoped>
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
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.timeline {
  > * {
    margin-bottom: 25px;
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 15px;
  }
  .el-card {
    color: black;
    font-size: 14px;
  }
}
.el-statistic {
  padding-top: 40px;
  margin-top: 5px;
}
</style>
