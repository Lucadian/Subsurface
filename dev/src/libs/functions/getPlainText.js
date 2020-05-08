function getPlainText(){
    // 去掉 HTML 标签 . 去掉回车 换行 . 合并所有空格
    return this.replace(/<[^>]+>/g,"").replace(/\n|\r/g,"").replace(/\s+/g," ")
}
module.exports = getPlainText