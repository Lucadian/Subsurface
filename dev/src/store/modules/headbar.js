export const state = {
    title:'',
    style:'',
    valid:{
        aug:false,
        shrink:false,
    }
}

//根据页面URL判断头部是否可伸缩
const pathname = window.location.pathname
const pathList = [
    '/essay/','/editor'
]
for(let i=0;i<pathList.length;i++){
    if(pathname.includes(pathList[i])){
        state.valid.shrink = true
        break
    }

}