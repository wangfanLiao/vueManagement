import * as XLSX from 'xlsx'
import dayjs from 'dayjs'

const downFile = (list) => {
  const xlslDate = list.map((item, index) => ({
    序号: index + 1,
    姓名: item.username,
    本月加班次数: item.times,
    '本月加班时长(H)': item.nowMonthOt
  }))
  // 将数据转换为工作表
  const ws = XLSX.utils.json_to_sheet(xlslDate, {
    skipHeader: false
  })
  ws['!cols'] = [
    { wch: 6 }, // 第一列宽
    { wch: 11.5 }, // 第二列宽
    { wch: 12.5 },
    { wch: 16 }
    // 可以根据需要添加更多列的配置
  ]

  // 创建一个新的工作簿
  const wb = XLSX.utils.book_new()
  // 将工作表添加到工作簿
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
  // 导出为Excel文件
  const date = dayjs().format('YYYY-MM')
  XLSX.writeFile(wb, `${date}加班记录.xlsx`)
}

export default downFile
