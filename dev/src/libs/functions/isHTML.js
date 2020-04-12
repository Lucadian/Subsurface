module.exports = function (){
    return this.substr(this.lastIndexOf('.')).toLowerCase() === '.html'
}