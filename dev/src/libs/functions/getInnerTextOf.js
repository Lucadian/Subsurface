
function getInnerTextOf(tagName){
    let startTag = '<' + tagName + '>'
    let endTag   = '</'+ tagName + '>'
    let length   = startTag.length
    let textNodes = []

    let index = this.indexOf(startTag)
    while(index !== -1) {
        textNodes.push(this.substring(index + length,this.indexOf(endTag,index + 1)))
        index = this.indexOf(startTag,index + 1); // 从字符串出现的位置的下一位置开始继续查找
    }

    return textNodes

}

module.exports = getInnerTextOf