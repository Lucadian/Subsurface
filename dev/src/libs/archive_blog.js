const fs   = require('fs')
const path = require('./path')
const getDirsFrom = require('./functions/getDirsFrom')
const getFilesFrom = require('./functions/getFilesFrom')

String.prototype.getInnerTextOf = require('./functions/getInnerTextOf.js')

let years = getDirsFrom(path.content + '/blog')

years.forEach((year)=>{

   let model_year = []

   let months = getDirsFrom(path.content + '/blog/' + year)
       months.forEach((month)=>{

           // 确保月份是两位字符串的格式
           month = parseInt(month) < 10 ? '0' + parseInt(month) : month
           let model_month = {
               //moty is the shortcut for 'month of the year'
               moty:month,
               days:[]
           }
           let files = getFilesFrom(path.content + '/blog/' + year + '/' + month,'html')
               files.forEach((day)=>{

                   let data = fs.readFileSync(path.content + '/blog/' + year + '/' + month + '/' + day,'utf-8')

                   let model_day = {
                       //dotm is the shortcut for 'day of the month'
                       dotm:day.split('.')[0].substr(-2),
                       blog:data.getInnerTextOf('log')[0].replace(/\ +/g,"").replace(/[\r\n]/g, ""),//字符串，日志的 html，去掉了空格和换行符
                   }
                   let imgs = data.getInnerTextOf('name') //数组，当前日志的图片路径，格式为 年/文件名，比如 ['2026/打脸.png','2026/呵呵.jpg']
                   if( imgs.length )
                       model_day.imgs = imgs
                   model_month.days.push(model_day)
               })
           model_month.days.reverse()
           model_year.push(model_month)
       })

    fs.writeFileSync(path.archive + '/blog/' + year + '.json', JSON.stringify(model_year.reverse()))
})


//年度日志的基本数据格式
// [
//     {
//         "moty":"03",
//         "days":[
//             {
//                 "dotm":"03",
//                 "blog":"...",
//                 "imgs":[...]
//             }
//         ]
//     }
// ]

//blogChart 的天数是 130