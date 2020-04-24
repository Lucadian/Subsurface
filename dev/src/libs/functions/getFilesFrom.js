const fs   = require('fs')
//只能获取有扩展名的文件
function getFilesFrom(path,suffix=''){
    let files = []
    let arr  = fs.readdirSync(path)
    for(let i=0;i<arr.length;i++){
        if(fs.statSync(path + '/' + arr[i]).isFile() && arr[i].includes('.' + suffix))
            files.push(arr[i])
    }
    return files
}

module.exports = getFilesFrom