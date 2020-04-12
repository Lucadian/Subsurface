function getPlainText(){
    // 去掉 HTML 标签 . 去掉回车 换行 . 去掉所有空格
    return this.replace(/<[^>]+>/g,"").replace(/\n|\r/g,"").replace(/\ +/g,"")
}
module.exports = getPlainText