let fs = require('fs')

const path = require('./path')

const dirs = fs.readdirSync(path.content + '/album')

dirs.forEach((dirname)=>{
    let arr = []
    const filenames = fs.readdirSync(path.content + '/album/' + dirname)
    filenames.forEach((filename)=>{arr.push(filename)})
    fs.writeFileSync(path.archive + '/album/' + dirname + '.json', JSON.stringify( arr ))
})
