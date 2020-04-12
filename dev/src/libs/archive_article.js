const fs   = require('fs')
const path = require('./path')

String.prototype.getInnerTextOf = require('./functions/getInnerTextOf.js')
String.prototype.getPlainText   = require('./functions/getPlainText.js')
String.prototype.isHTML         = require('./functions/isHTML.js')

// 文章列表
let archive = []
let updates = []

let dirs    = fs.readdirSync(path.content + '/article')
//删除非目录文件
for(let i=0;i<dirs.length;i++){
    if(dirs[i].includes('.'))
        dirs.splice(i, 1)
}

// 读取每个文章目录
dirs.forEach((dirname)=>{
    // 获取所有文件名
    let files = fs.readdirSync(path.content + '/article/' + dirname)
    // 读取每个文件内容
    files.forEach((filename)=>{
        //如果文件是一个 HTML 文件
        if(filename.isHTML()){
            let article = {}

            let info = {}
            let tmps = fs.readFileSync(path.content + '/article/' + dirname + '/' + filename, 'utf-8').split('<!--divider-->')
            tmps[0].split(/\n/g).forEach((item) => {
                let tmp = item.split(':')
                info[tmp[0]] = tmp[1]
            })

            // 如果不是一个隐形文件，则将其内容存入文章列表
            if(!info.cloak){
                article.file  = filename.slice(0,filename.lastIndexOf('.'))
                article.dir   = dirname
                article.title = info.title
                article.cover = info.cover
                article.brief = tmps[1].getPlainText().slice(0,110)
                article.subtitles = tmps[1].getInnerTextOf('h2')
                article.edited    = Number(info.lastEdited.replace(/-/g,''))
                archive.push(article)
            }

        }
    })

})

// 将文章列表按“最后编辑时间”降序排列
archive = archive.sort((a, b) => b.edited - a.edited)
// 将前 6 篇文章做侧栏文章列表
updates = archive.slice(0,6)

fs.writeFileSync(path.archive + '/article/archive.json', JSON.stringify(archive))
fs.writeFileSync(path.archive + '/article/updates.json', JSON.stringify(updates))