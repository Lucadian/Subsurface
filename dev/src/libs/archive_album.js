

let fs = require('fs')
const getDirsFrom = require('./functions/getDirsFrom')
const getFilesFrom = require('./functions/getFilesFrom')
const delFilesFrom = require('./functions/delFilesFrom')
const path = require('./path')

//先清空数据目录，因为修改 content 下的相册文件夹，可能会生成新 XXX.json 与之前的数据文件不重名，无法覆盖，所以要先清空
delFilesFrom(path.archive + '/album')

//获取所有的图片目录名
const dirs = getDirsFrom(path.content + '/album')

dirs.forEach((dirname)=>{
    let filenames = getFilesFrom(path.content + '/album/' + dirname)
    fs.writeFileSync(path.archive + '/album/' + dirname + '.json', JSON.stringify(filenames))
})
