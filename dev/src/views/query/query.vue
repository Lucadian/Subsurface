<template>
    <v-content>
        <list/>
        <pagi/>
    </v-content>
</template>

<script>
    import { mapState } from 'vuex'
    import pagi from './pagi/pagi'
    import list from './list/list'

    export default {
        name: "articleList",
        data(){
            return {
               
            }
        },
        computed:{
            ...mapState(['headbar','footbar','hash']),
        },
        components:{
            list,pagi
        },
        created() {
            this.headbar.valid.shrink = false
            this.headbar.style = 'width: 57rem'
            this.footbar.style = 'width: 57rem'

            if(window.location.hash){
                let arr = window.location.hash.substr(1).split('&')

                let obj = {}
                arr.forEach((item)=>{
                    item = item.split('=')
                    obj[item[0]] = decodeURI(item[1])
                })

                this.hash.page = obj.page ? Number(obj.page) : 1

                if(obj.category){
                    this.hash.queryKey = 'category'
                    this.hash.queryVal = obj.category
                    this.headbar.valid.complex = true
                    this.headbar.title = '文章列表'
                    this.headbar.subtitle = obj.category
                }
                else if(obj.search){
                    this.hash.queryKey = 'search'
                    this.hash.queryVal = obj.search
                    this.headbar.valid.complex = true
                    this.headbar.title = '查找结果'
                    this.headbar.subtitle = obj.search
                }
                else {
                    this.headbar.title = '次表面网络空间'
                }

            }



            this.headbar.title = '文章列表'
            this.headbar.subtitle = '全部'
            // let title='',description = ''
            // this.headbar.title = `
            //                      <style>
            //                          .zm-title{
            //                              letter-spacing: 1px;
            //                              padding-right: 20px;
            //                          }
            //                          .标题{
            //                              position: relative;
            //                              letter-spacing: 2px;
            //                              padding-right: 10px;
            //                              height: 35px;
            //                              overflow: hidden;
            //                          }
            //                          .标题::after{
            //                              display: inline-block;content: '';
            //                              position: absolute;right: 0;bottom: 7px;
            //                              height: 20px;
            //                              width: 1px;
            //                              background-color: white;
            //                          }
            //                          .说明{
            //                              font-size: 80%;
            //                              transform: translateX(12px) translateY(2px);
            //                              max-width: 130px;
            //                              height: 30px;
            //                              display: -webkit-box;
            //                              -webkit-box-orient: vertical;
            //                              -webkit-line-clamp: 1;
            //                              overflow: hidden;
            //                          }
            //                      </style>
            //                      <div class="zm-title title d-flex ml-2" >
            //                          <div class="标题">${title}</div><div class="说明">${description}</div>
            //                      </div>
            //                      `
        }
    }
</script>

<style scoped lang="scss">

    main.v-content{
        &::before{
            display: block;content: '';
            position: fixed;top: 0;left: 0;
            width: 100vw;height: 100vh;
            background-color: hsl(0,0%,94%);
            @media(max-width: 600px){
                background-color: white;
            }
        }
        .v-content__wrap{
            position: relative;
        }
    }
</style>