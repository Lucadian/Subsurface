const fs   = require('fs')
const path = require('./path')
const createCanlendar = require('./functions/createCanlendar')
String.prototype.getPlainText = require('./functions/getPlainText')
// 获取到所有年份
let files = fs.readdirSync(path.archive + '/blog')
let years = []
for(let i=0;i<files.length;i++){
    let name = parseInt(files[i])
    if(!name){
        continue
    }
    years.push(name)
}
//将年份从大到小排序
years = years.sort((a,b)=>b - a)
let data = JSON.parse(fs.readFileSync(path.archive + '/blog/' + years[0] + '.json','utf-8')).year[0]
//根据最近更新日期，创建一个往前 130 天的日历
let chart = createCanlendar(years[0],Number(data.moty),Number(data.days[0].dotm),135)
let sheet = [
    60,140,240,360,500
]
traverse:
for(let i=0;i<years.length;i++){

    let year = years[i]

    let archive = JSON.parse(fs.readFileSync(path.archive + '/blog/' + year + '.json','utf-8')).year
    for(let i=0;i<archive.length;i++){

        let month = archive[i]

        for(let i=0;i<month.days.length;i++){

            let day = month.days[i]
            let key = year + '-' + month.moty + '-' + day.dotm
            if( key in chart ){
                let blog = day.blog.getPlainText()
                let rank = blog.length
                for(let i=0;i<sheet.length;i++){
                    if(rank < sheet[i]){
                        rank = i + 1
                        break
                    }
                    else if(i === 4){
                        rank = 5
                    }
                }
                    blog = blog.substr(0,24)
                chart[key] = {
                    blog,
                    rank
                }
            }
            else{
                break traverse
            }
        }
    }

}
//将 chart 由对象改为数组
let archive = []
for(let key in chart){
    let item = {
        date:key
    }
    if(chart[key]){
        item.blog = chart[key].blog
        item.rank = chart[key].rank
    }

    archive.push(item)
}
fs.writeFileSync(path.archive + '/blog/chart.json', JSON.stringify(archive))



