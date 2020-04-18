const fs   = require('fs')

function getDirsFrom(path){
    let dirs = []
    let arr  = fs.readdirSync(path)
    for(let i=0;i<arr.length;i++){
        if(fs.statSync(path + '/' + arr[i]).isDirectory())
            dirs.push(arr[i])
    }
    return dirs
}

module.exports = getDirsFrom