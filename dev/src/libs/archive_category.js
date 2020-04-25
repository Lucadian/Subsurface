let fs = require('fs')

const getDirsFrom = require('./functions/getDirsFrom')
const getFilesFrom = require('./functions/getFilesFrom')
const path = require('./path')

const article = require('../assets/category/article')
const blog  = require('../assets/category/blog')
const album = require('../assets/category/album')

//----------------------------------------文章分类数据----------------------------------------
let dirs = getDirsFrom(path.content + '/article')

for(let i=0;i<dirs.length;i++){
    let num = getFilesFrom(path.content + '/article/' + dirs[i]).length
    article[0].total += num

    if(dirs[i].includes(',')){
        let arr = dirs[i].split(',')
        for(let i=0;i<arr.length;i++)
            for(let j=1;j<article.length;j++)
                if(article[j].title === arr[i]){
                    article[j].total += num
                    break
                }
    }
    else{
        for(let j=1;j<article.length;j++)
            if(article[j].title === dirs[i]){
                article[j].total += num
                break
            }
    }
}

//----------------------------------------日志分类数据----------------------------------------
let years = getDirsFrom(path.content + '/blog')
years.forEach((year)=>{
    let num = 0
    let months = getDirsFrom(path.content + '/blog/' + year)
    months.forEach((month)=>{
        num += getFilesFrom(path.content + '/blog/' + year + '/' + month).length
    })
    for(let i=0;i<blog.length;i++)
        if(parseInt(blog[i].title) === parseInt(year)){
            blog[i].total += num
            break
        }
})

//----------------------------------------相册分类数据----------------------------------------
let names = getDirsFrom(path.content + '/album')
names.forEach((name)=>{
    let num = 0
    num += getFilesFrom(path.content + '/album/' + name).length

    for(let i=0;i<album.length;i++)
        if(album[i].dir === name){
            album[i].total += num
            break
        }
})

//----------------------------------------合并分类数据----------------------------------------
let category = {
    article,
    blog,
    album
}
fs.writeFileSync(path.archive + '/category/category.json',JSON.stringify(category))
