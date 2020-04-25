let fs = require('fs')
let path = require('path')

const getDirsFrom = require('./functions/getDirsFrom')
const getFilesFrom = require('./functions/getFilesFrom')

const path_content = path.resolve(__dirname,'../../../content')
const path_statistics = path.resolve(__dirname,'../assets/category/statistics.js')

let statistics  = {
    全部文章:0,
}
//----------------------------------------文章分类数据----------------------------------------
let dirs = getDirsFrom(path_content + '/article')

for(let i=0;i<dirs.length;i++) {
    if(dirs[i].includes(',')){
        let arr = dirs[i].split(',')
        for(let i=0;i<arr.length;i++){
            statistics[arr[i]] = 0
        }
    }
    else{
        statistics[dirs[i]] = 0 //如果目录内没有文件，则将该目录名的分类内容设为 0
    }
}
for(let i=0;i<dirs.length;i++){
    let num = getFilesFrom(path_content + '/article/' + dirs[i]).length
    statistics['全部文章'] += num
    if(dirs[i].includes(',')){
        let arr = dirs[i].split(',')
        for(let i=0;i<arr.length;i++){
            statistics[arr[i]] += num
        }
    }
    else{
        statistics[dirs[i]] += num
    }
}

//----------------------------------------日志分类数据----------------------------------------
let years = getDirsFrom(path_content + '/blog')
years.forEach((year)=>{
    let num = 0
    let months = getDirsFrom(path_content + '/blog/' + year)
    months.forEach((month)=>{
        num += getFilesFrom(path_content + '/blog/' + year + '/' + month).length
    })
    statistics[year] = num
})
//----------------------------------------相册分类数据----------------------------------------
let names = getDirsFrom(path_content + '/album')
names.forEach((name)=>{
    let num = 0
    num += getFilesFrom(path_content + '/album/' + name).length
    statistics[name] = num
})

fs.writeFileSync(path_statistics,'module.exports = ' + JSON.stringify(statistics))
