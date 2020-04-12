import Vue from 'vue'
import Vuex from 'vuex'

import * as headbar from './modules/headbar'
import * as footbar from './modules/footbar'
import * as archive from './modules/archive'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    display:{
        isMobile:false
    },
    visible:{
        category:false,
        contacts:false,
        arkTitle:true
    },
    overlay:{
        visible : false,
        message :'',
    },
    hash:{
      page:1,
      total:1,
      queryKey:'',
      queryVal:'',
    },
  },
  mutations: {
    hideScrollbar(state){
      let root = document.getElementById('html')
          root.classList.remove('scroller')
      if (state.display.isMobile)
        root.classList.remove('mr-17')
      else
        document.getElementById('headbar').classList.remove('scroller')
    },
    showScrollbar(state){
      let root = document.getElementById('html')
      root.classList.add('scroller')
      if (state.display.isMobile)
        root.classList.add('mr-17')
      else
        document.getElementById('headbar').classList.add('scroller')
    },
    rewriteHash(state){
      let query = state.hash.queryKey ? state.hash.queryKey + '=' + state.hash.queryVal + '&' : ''
      let page  = state.hash.total > 1 ? 'page=' + state.hash.page : ''
      window.location.hash = query + page
    }
  },
  actions: {

  },
  getters:{
    // rows:(state) =>{
    //   if(state.archive.raw.length){
    //     //根据哈希中的查询参数，处理文章列表
    //     let rows = []
    //     let data = state.archive.raw
    //
    //     switch (state.hash.queryKey) {
    //       case 'category':
    //         if(state.hash.queryVal !== '全部'){
    //           data.forEach((item)=>{
    //             if(item.dir.includes(state.hash.queryVal))
    //               rows.push(item)
    //           })
    //         }
    //         else
    //           rows = data
    //         break
    //       case 'search':
    //         let args = this.getQueryArgs()
    //         let temp = []
    //         data.forEach((item)=>{
    //           for(let i=0;i<args.length;i++){
    //             let arg  = args[i] === 'js' ? 'javascript' : args[i]
    //             if( item.dir.toLowerCase().includes(arg)
    //                 || item.title.toLowerCase().includes(arg)
    //                 || item.brief.toLowerCase().includes(arg)
    //                 || item.subtitles.join(' ').toLowerCase().includes(arg)
    //             )
    //               temp.push(arg)
    //           }
    //           if(temp.length === args.length)
    //             rows.push(item)
    //           temp = []
    //         })
    //         break
    //       default:
    //         rows = data
    //     }
    //     return rows
    //   }
    //   else
    //     return []
    //
    // }
  },
  modules: {
    headbar,footbar,archive
  }
})
