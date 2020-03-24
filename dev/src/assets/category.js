export { category }
let statistics = require('./statistics')

let category = {
    article:[
        {
            title: '全部',
            subtitle:'按更新时间排序',icon: 'mdi-baguette',
            num:statistics['全部文章']
        },
        {
            title: 'API',
            subtitle:'内置函数 接口',icon: 'mdi-api',
            num:statistics['API']
        },
        {
            title: 'SDK',
            subtitle:'开箱即用 类库',icon: 'mdi-package-variant-closed',
            num:statistics['SDK']
        },
        {
            title: 'PHP',
            subtitle:'业务手册 备忘',icon: 'mdi-language-php',
            num:statistics['PHP']
        },
        {
            title: 'CSS',
            subtitle:'属性 特效 速查',icon: 'mdi-text-recognition',
            num:statistics['CSS'] ? statistics['CSS'] : 0
        },
        {
            title: 'JavaScript',
            subtitle:'基础 进阶 概念',icon: 'mdi-language-javascript',
            num:statistics['JavaScript']
        },
        {
            title: '工具',
            subtitle:'软件 配置 技巧',icon: 'mdi-bus',
            num:statistics['工具']
        },
        {
            title: '规范',
            subtitle:'理论 解读 分析',icon: 'mdi-pencil-ruler',
            num:statistics['规范'] ? statistics['规范']:0
        },
        {
            title: '美术',
            subtitle:'设计 & 素材',icon: 'mdi-adobe',
            num:statistics['美术'] ? statistics['美术']:0
        },
        {
            title: '核弹',
            subtitle:'面经 & 汇总',icon: 'mdi-nuke',
            num:statistics['核弹'] ? statistics['核弹']:0
        },
        {
            title: '其他',
            subtitle:'执念 & 生活',icon: 'mdi-sony-playstation',
            num:statistics['其他'] ? statistics['其他']:0
        },
    ],
    blog:[
        {
            title: '2020年',
            subtitle:'3月~12月',icon: 'mdi-script-text-outline',
            num:statistics['2020']
        }
    ],
    album:[
        {
            title: '默认相册',
            subtitle:'',icon: 'mdi-postage-stamp',
            num:statistics['默认相册']
        }
    ]
}