<template>
    <div class="list" v-if="rows">
        <div class="aRow" v-for="item in list[page]">
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
                            目录：{{item.dir}}
                        </div>
                    </div>
                    <div class="brief" v-text="item.brief"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import domain from '@/assets/domain'
    import { mapState } from 'vuex'
    import axios from 'axios'

    export default {
        name: "list",
        data(){
            return {
                domain,
                raws:[]
            }
        },
        computed:{
            ...mapState(['display','hash']),
            targ(){
                return this.display.isMobile ? '_self' : '_blank'
            },
            page(){
                return this.hash.page - 1
            },
            list(){
                if(this.rows){
                    let list = this.divide(this.rows)
                    this.hash.total = list.length
                    return list
                }
            },
            rows(){
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
            location(dir,file){
                window.location.href = 'http://' + window.location.host + '/article/' + dir + '/' + file
            },
            href(dir,file){
                return 'http://' + window.location.host + '/essay/' + dir + '/' + file
            },
            src(path){
                return this.domain.image + '/images/' + path
            },
            getDate(int){
                if(int){
                    let arr = int.toString().split('')
                    return arr[0] + arr[1] + arr[2] + arr[3] + '-' + arr[4] + arr[5] + '-' + arr[6] + arr[7]
                }
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
                let pagi = this.display.isMobile ? 1 : 1
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
        created() {
            axios.get('http://'+ window.location.host + '/archive/article/archive.json')
                .then(response => {
                    this.raws = response.data
                })
                .catch(err => {
                    window.location = 'http://'+ window.location.host + '/error?' + err
                })
        }

    }
</script>

<style scoped lang="scss">
@import 'list.scss';
</style>