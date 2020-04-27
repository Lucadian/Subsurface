<template>
    <div class="essayInfo d-flex">
        <div>
            <v-icon x-small class="mr-0 hidden-xs-only" color="#ef5a5a" style="transform: translateY(-1px)">mdi-camera-control</v-icon>
            最后编辑 {{ info.lastEdited }}
        </div>
        <div class="hidden-sm-and-down">
            发布于 {{ info.published }}
        </div>
        <div class="hidden-xs-only">
            所属分类「 {{ category }} 」
        </div>
        <v-spacer class="hidden-xs-only"/>
        <div>
            <v-icon x-small :dark="!$vuetify.breakpoint.smAndDown" class="mr-1 pb-0">mdi-link-variant</v-icon>来源 : {{ info.source }}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "essayInfo",
        data(){
            return {
                timer:null
            }
        },
        computed:{
            ...mapState(['headbar']),
            info(){
                let obj = {}
                let arr = this.value.split(/\n/g)
                    arr.forEach((item,index)=>{
                        if(!item)
                            arr.splice(index,1)//删除空项
                    })
                arr.forEach((item)=>{
                    let prop = item.split(':')
                    obj[prop[0]] = prop[1]
                })
                return obj
            },
            category(){
                let ctg = ''
                if(this.dirname.includes(',')){
                    let arr = this.dirname.split(',')
                    ctg = arr[0] + ' , ' + arr[1]
                }
                else
                    ctg = this.dirname
                return ctg
            }
        },
        props:['value','dirname'],
        methods:{
            checkScroll(){
                console.log(1)
            },
            throttle(fn, delay) {
                let prev = Date.now()
                return function() {
                    let now = Date.now()
                    if (now - prev > delay) {
                        fn()
                        prev = Date.now()
                    }
                }
            }
        },
        beforeUpdate(){
            if(!this.headbar.title){
                document.getElementById('title').innerHTML = this.headbar.title = this.info.title
            }
        },
        mounted (){
            window.addEventListener('scroll',this.throttle(this.checkScroll,500),true)
        },
        destroyed () {
            window.removeEventListener('scroll', this.throttle)
        }

    }
</script>

<style scoped lang="scss">
    @import "../../../assets/style.theme.scss";
    div.essayInfo{
        color: white;
        user-select: none;
        font-style: normal;
        font-weight: 100;
        font-size: 70%;
        background-color: #3d4146;
        padding: 3px 10px 3px 6px;
        box-sizing: border-box;
        border-top: 1px solid $info_thread_red;
        text-shadow: 0 0 3px black,1px 1px 0 black;
        border-right: .5px solid black;
        @media (max-width: 600px){
            transform: translateY(-22px);
            color: black;
            font-weight: normal;
            text-shadow: none;
            border-top: 0;
            background-color: transparent;
            border-right:0;
            padding: 3px 8px;
        }
        div{
            word-break: break-all;
            letter-spacing: 0.5px;
            height: 16.8px;
            overflow-y: hidden;
            /*display: -webkit-box;*/
            /*-webkit-box-orient: vertical;*/
            /*-webkit-line-clamp: 1;*/
        }
        div:not(:last-child){
            margin-right: 20px;
        }
        div.spacer{
            margin-right: 0;
        }

    }
</style>