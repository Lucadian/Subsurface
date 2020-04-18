//应该绑定在 Number.prototype 上，也可以绑定在 String.prototype
function isLeapYear(){
    let 年 = parseInt(this)
    let 能被4整除 = 年%4 === 0

    let 不能被100整除 = 年%100 !== 0
    return 能被4整除 && 不能被100整除
}

module.exports = isLeapYear