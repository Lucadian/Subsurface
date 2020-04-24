const fs = require('fs')

function delFilesFrom(path,deleteRootDir=false){
    let files = []
    if(fs.existsSync(path)){
        files = fs.readdirSync(path)
        files.forEach((file, index) => {
            let curPath = path + "/" + file
            if(fs.statSync(curPath).isDirectory()){
                delDir(curPath) //递归删除文件夹
            } else {
                fs.unlinkSync(curPath) //删除文件
            }
        })
        if(deleteRootDir)
            fs.rmdirSync(path)
    }
}

module.exports = delFilesFrom

// 版权声明：本文为CSDN博主「AdleyTales」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/adley_app/java/article/details/83010257