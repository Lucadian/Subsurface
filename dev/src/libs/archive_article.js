const fs   = require('fs')
const path = require('./path')

const getDirsFrom = require('./functions/getDirsFrom')
const getFilesFrom = require('./functions/getFilesFrom')
String.prototype.getInnerTextOf = require('./functions/getInnerTextOf.js')
String.prototype.getPlainText   = require('./functions/getPlainText.js')
String.prototype.isHTML         = require('./functions/isHTML.js')

// 文章列表
let archive = []
let updates = []

let dirs    = getDirsFrom(path.content + '/article')

// 读取每个文章目录
dirs.forEach((dirname)=>{
    // 获取所有文件名 ，cloak 文件夹不会被读取
    let files = getFilesFrom(path.content + '/article/' + dirname)
    // 读取每个文件内容
    files.forEach((filename)=>{
        //如果文件是一个 HTML 文件
        if(filename.isHTML()){
            let article = {}

            let info = {}
            let tmps = fs.readFileSync(path.content + '/article/' + dirname + '/' + filename, 'utf-8').split('<!--divider-->')
            tmps[0].split(/\r\n/g).forEach((item) => {
                let tmp = item.split(':')
                info[tmp[0]] = tmp[1]
            })

            article.file  = filename.slice(0,filename.lastIndexOf('.'))
            article.dir   = dirname
            article.title = info.title
            article.cover = info.cover
            article.brief = tmps[1].getPlainText().slice(0,110)
            article.subtitles = tmps[1].getInnerTextOf('h2')
            article.edited    = Number(info.lastEdited.replace(/-/g,''))
            archive.push(article)

        }
    })

})

// 将文章列表按“最后编辑时间”降序排列
archive = archive.sort((a, b) => b.edited - a.edited)

fs.writeFileSync(path.archive + '/article/archive.json', JSON.stringify(archive))

// 将前 6 篇文章做侧栏文章列表
updates = archive.slice(0,6)
updates.forEach((article)=>{
    delete article.brief
    delete article.subtitles
    let arr = article.edited.toString().split('')
    article.edited = arr[0] + arr[1] + arr[2] + arr[3] + '-' + arr[4] + arr[5] + '-' + arr[6] + arr[7]
})
fs.writeFileSync(path.archive + '/article/updates.json', JSON.stringify(updates))