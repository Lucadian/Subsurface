Number.prototype.isLeapYear = require('./isLeapYear')
String.prototype.isLeapYear = require('./isLeapYear')
//应该绑定在年份(Number 或 String)上
function getDaysOfMonth(moty){
    moty = parseInt(moty)
    switch(moty){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 2:
            return this.isLeapYear() ? 29 : 28
        default :
            return 30
    }
}

module.exports = getDaysOfMonth