<template>
    <div class="list" v-if="rows">
        <div class="aRow" :class="{fadeIn:fadeInQueue[idx]}" v-for="(item,idx) in list">
                <div class="wrapper d-flex justify-space-between">
                    <div class="aside">
                        <a class="cover" :href="href(item.dir,item.file)" :target="targ">
                            <img :src=src(item.cover)>
                        </a>
                    </div>
                    <div class="content">
                        <div class="title">
                            <a :href="href(item.dir,item.file)" :target="targ">
                                <h5 v-text="item.title" />
                            </a>
                        </div>
                        <div class="notes d-flex font-weight-light align-center">
                            <div class="note">
                                <v-icon small class="mr-1 mb-1">mdi-content-save-edit-outline</v-icon>{{ getDate(item.edited) }}
                            </div>
                            <div class="note">
                                {{ isMobile ? item.dir : '目录：' + item.dir}}
                            </div>
                        </div>
                        <div class="brief" v-text="item.brief"/>
                    </div>
                </div>
        </div>
        <transition name="fade">
            <div class="noResult" v-show="!list">
                <div class="cage d-flex justify-center">
                    <v-icon x-large class="downasaur">mdi-google-downasaur</v-icon>
                    <div class="queryVal d-flex">
                        <div class="txt" v-text="hash.queryVal"/>
                        <div class="hlp">?</div>
                    </div>
                </div>
                <div class="btn d-flex justify-center">
                    <v-btn  text outlined large color="#999999" @click="resetRows">返回</v-btn>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { imageHost } from '@/assets/host'
    import { mapState,mapMutations } from 'vuex'
    import axios from 'axios'

    export default {
        name: "list",
        data(){
            return {
                raws:[],
                fadeInQueue:[]
            }
        },
        computed:{
            ...mapState(['hash']),
            isMobile(){
                return this.$vuetify.breakpoint.smAndDown
            },
            targ(){
                return this.isMobile ? '_self' : '_blank'
            },
            list(){ // 将 rows 切分为多页
                if(this.rows){
                    // 将总条数，根据每页行数分页
                    let list = this.divide(this.rows)
                    // 将得到的总页数存入 vuex
                    this.hash.total = list.length
                    // 返回当前页列表
                    return list[this.hash.page - 1]
                }
            },
            rows(){ // raws 处理后的总条数
                if(this.raws.length){
                    let rows = []
                    switch (this.hash.queryKey) {
                        case 'category':
                            if(this.hash.queryVal !== '全部'){
                                this.raws.forEach((item)=>{
                                    if(item.dir.includes(this.hash.queryVal))
                                        rows.push(item)
                                })
                            }
                            else
                                rows = this.raws
                            break
                        case 'search':
                            let args = this.getQueryArgs()
                            let temp = []
                            this.raws.forEach((item)=>{
                                for(let i=0;i<args.length;i++){
                                    let arg  = args[i] === 'js' ? 'javascript' : args[i]
                                    if( item.dir.toLowerCase().includes(arg)
                                        || item.title.toLowerCase().includes(arg)
                                        || item.brief.toLowerCase().includes(arg)
                                        || item.subtitles.join(' ').toLowerCase().includes(arg)
                                    )
                                        temp.push(arg)
                                }
                                if(temp.length === args.length)
                                    rows.push(item)
                                temp = []
                            })
                            break
                        default:
                            rows = this.raws
                    }
                    return rows
                }
                else
                    return null
            }
        },
        methods:{
            ...mapMutations(['rewriteHash']),
            location(dir,file){
                window.location.href = 'http://' + window.location.host + '/article/' + dir + '/' + file
            },
            href(dir,file){
                return 'http://' + window.location.host + '/essay/' + dir + '/' + file
            },
            src(path){
                return imageHost + '/images/' + path
            },
            getDate(int){
                if(int){
                    let arr = int.toString().split('')
                    return arr[0] + arr[1] + arr[2] + arr[3] + '-' + arr[4] + arr[5] + '-' + arr[6] + arr[7]
                }
            },
            resetRows(){
                this.hash.queryKey =''
                this.hash.queryVal =''
                this.rewriteHash()
            },
            splitQueryVal(dot){ return this.hash.queryVal.toLowerCase().split(dot) },
            getQueryArgs(){
                let args = []
                if(this.hash.queryVal.includes(' '))
                    args = this.splitQueryVal(' ')
                else if(this.hash.queryVal.includes('，'))
                    args = this.splitQueryVal('，')
                else
                    args = this.splitQueryVal(',')
                return args
            },
            divide(data){
                let list = []
                let rows = []
                let pagi = this.isMobile ? 6 : 7
                // let pagi = this.isMobile ? 1 : 1
                for(let i=0;i<data.length;i++){
                    rows.push(data[i])
                    if((i + 1) % pagi === 0){
                        list.push(rows)
                        rows = []
                    }
                    else if(i === data.length - 1)
                        list.push(rows)
                }
                return list
            },

        },
        watch:{
            list(val){
                if(val){
                    document.documentElement.scrollTop = 0
                    this.fadeInQueue = []
                    setTimeout(()=>{
                        let n = 0
                        let timer = setInterval(()=>{
                            this.fadeInQueue.push(true)
                            n++
                            if(n === val.length)
                                clearInterval(timer)
                        },40)
                    },110)
                }
            }
        },
        created() {
            axios.get('http://'+ window.location.host + '/archive/article/archive.json?_=' + Date.now())
                .then(response => {
                    this.raws = response.data
                })
                .catch(err => {
                    window.location = 'http://'+ window.location.host + '/queryList_err?' + err
                })
        }

    }
</script>

<style scoped lang="scss">
@import 'list.scss';
</style>