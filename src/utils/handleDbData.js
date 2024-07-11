import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

const handleData = (userList, overtimeLis) => {
  let hours, count
  const list = []
  userList.forEach((element) => {
    hours = 0
    count = 0
    overtimeLis.forEach((item, index) => {
      if (
        item.username === element.username &&
        dayjs().month() === dayjs(item.startTime).month()
      ) {
        hours += item.overtime
        count += 1
      }
    })

    list.push({
      username: element.username,
      times: count,
      nowMonthOt: hours
    })
  })

  return list
}

export default handleData
