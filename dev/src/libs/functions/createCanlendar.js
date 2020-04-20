Number.prototype.getDaysOfMonth = require('./getDaysOfMonth')
function createCanlendar(year,month,day,length){
    let chart = {}
    let max  = day
    let sub  = 1
    let moty = month
    for(let i=0;i<length;i++){

        if( i < max ){
            let dotm
            if( day - i > 0 ){
                dotm = day - i
            }
            else{
                dotm = max - i
            }
            moty = moty < 10 ? '0' + Number(moty) : moty.toString()
            dotm = dotm < 10 ? '0' + dotm : dotm.toString()
            let key = year + '-' + moty + '-' + dotm
            chart[key] = null
        }
        else{
            if(month - sub > 0){
                max += year.getDaysOfMonth(month - sub) + 1
                moty = month - sub
            }
            else{
                max += (year - 1).getDaysOfMonth(12 - (sub - month)) + 1
                moty = 12 - (sub - month)
                year -= 1
            }
            sub ++
        }
    }

    return chart
}

module.exports = createCanlendar
