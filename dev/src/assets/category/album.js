export { album }
let statistics = require('./statistics')

let album = [
    {
        title: '默认相册', subtitle:'未分类图片',icon: 'mdi-postage-stamp',

        dirname:'默认相册',
        num:statistics['默认相册']
    },
    {
        title: '日志相册',subtitle:'2020 临时',icon: 'mdi-redhat',

        dirname:'日志图片_2020',
        num:statistics['日志图片_2020']
    },
    {
        title: '动效图片',subtitle:'演示 & 意向',icon: 'mdi-dog-side',

        dirname:'全页动效',
        num:statistics['全页动效']
    },
    {
        title: '大祖玛', subtitle:'美工 & 留念',icon: 'mdi-pig-variant',

        flipH:true,
        dirname:'大祖玛',
        num:statistics['大祖玛']
    },
]