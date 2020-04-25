export { album }
let statistics = require('./statistics')

let album = [
    {
        title: '默认相册', subtitle:'未分类图片',icon: 'mdi-postage-stamp',

        dirname:'album_默认相册',
        num:statistics['album_默认相册']
    },
    {
        title: '日志相册',subtitle:'2020 临时',icon: 'mdi-redhat',

        dirname:'album_2020',
        num:statistics['album_2020']
    },
    {
        title: '动效图片',subtitle:'演示 & 意向',icon: 'mdi-dog-side',

        dirname:'album_全页动效',
        num:statistics['album_全页动效']
    },
    {
        title: '大祖玛', subtitle:'美工 & 留念',icon: 'mdi-pig-variant',

        flipH:true,
        dirname:'album_大祖玛',
        num:statistics['album_大祖玛']
    },
]