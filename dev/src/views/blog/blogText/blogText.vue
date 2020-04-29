<template>
    <div class="blogText">
        <div class="month" v-for="(month,idx) in blogs">
            <div class="anchor-month" :id="'month=' +  parseInt(month.moty)" />
            <div class="label-month" v-if="idx"
                 v-text="year + ' 年 ' + month.moty + ' 月'"
            />
            <div class="daysWrapper">
                <v-lazy class="day d-flex flex-column justify-center"
                        v-for="day in month.days"
                        transition="fade-transition"
                        :min-height="calcHeight(day.imgs)"
                        :options="{
                            rootMargin:'-200px 0px'
                        }"
                >
                    <div class="contentBox d-flex flex-column">
                        <div class="day-label">
                            2020 - {{ month.moty }} - {{ day.dotm }}
                        </div>
                        <div class="log" v-html="day.blog" />
                        <div class="imgs d-flex" v-if="day.imgs">
                            <div class="coverBox" v-for="img in day.imgs" @click="showViewer">
                                <img :src="resolve(img)">
                            </div>
                        </div>
                    </div>
                </v-lazy>
            </div>
        </div>
        <div class="Fin">
            Fin
        </div>
        <poster :post="post"/>
        <viewer :path="path" />
    </div>
</template>

<script>
    // import { albumHost } from '@/assets/host'
    import viewer from '@/components/viewer/viewer'
    import poster from './poster/poster'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: "blogText",
        data(){
            return {
                blogs:[],
                path:{
                    value:''
                },
                post:{
                    value:''
                }
            }
        },
        computed:{
            ...mapState(['headbar','hash','blog']),
            isMobile(){
                return this.$vuetify.breakpoint.smAndDown
            },
            subtext(){
                return this.year + '.' + this.blogs[this.blogs.length - 1].moty + ' ~ ' + this.blogs[0].moty + ''
            },
            subtitle(){
                if(!this.isMobile && this.blogs.length)
                    return this.subtext
                else
                    return ''
            }
        },
        watch:{
            isMobile(val){
                if(val){
                    this.headbar.title = ''
                    this.hash.queryVal = ''
                }
                else{
                    this.headbar.title =  '日志'
                    this.hash.queryVal = this.subtitle
                }
            },
            'blog.blogText.date':function(date){ //date格式 '2020-02-20'
                let arr = date.split('-')
                if( arr[0] !== this.year )
                    window.location = 'http://'+ window.location.host + '/archive/blog/' + arr[0] + '#month=' + arr[1] + '&day=' + arr[2]
                else
                    for(let i=0;i<this.blogs.length;i++){
                        if(this.blogs[i].moty === arr[1]){
                            for(let d=0;d<this.blogs[i].days.length;d++){
                                if(this.blogs[i].days[d].dotm === arr[2]){
                                    this.post.value = this.blogs[i].days[d].blog
                                    this.post.date = date
                                    break
                                }
                            }
                            break
                        }
                    }
            }
        },
        methods:{
            calcHeight(imgs){
                // 有图片建议 240，无图片建议 130
                return imgs ? 240 : 130
            },
            showViewer(){
                // this.path.value = event.currentTarget.getAttribute('src')
                this.path.value = event.currentTarget.children[0].src
            },
            resolve(path){
                return '/content/album/' + path
            },
            setTabbar(){
                let anchors = document.getElementsByClassName('anchor-month')
                for(let i=0;i<anchors.length;i++){
                    this.tabbar.offsets.push(parseInt(anchors[i].offsetTop))
                }
                this.tabbar.offsets.reverse()

            }

        },
        components:{
            viewer,poster
        },
        props:['year','tabbar','info'],
        created() {
            this.headbar.valid.aug = true
            if(this.isMobile)
                this.headbar.title = ''
            else
                this.headbar.title =  '日志'

            axios.get('http://'+ window.location.host + '/archive/blog/' + this.year + '.json?_=' + Date.now())
                .then( response => {
                    this.blogs = response.data.year

                    this.info.total = response.data.info.total
                    this.info.mean  = response.data.info.mean

                    this.hash.queryVal = this.subtitle
                    document.getElementById('title').innerText = '日志 | ' + this.subtext

                    this.blogs.forEach((month)=>{
                        this.tabbar.tabs.unshift(parseInt(month.moty) + ' 月')
                    })

                    if(window.location.hash){
                        let arr = window.location.hash.substr(1).split('&')
                        let obj = {}
                        arr.forEach((item)=>{
                            item = item.split('=')
                            obj[item[0]] = decodeURI(item[1])
                        })
                        if(obj.month && obj.day){
                            this.blog.blogText.date  = this.year + '-' + obj.month + '-' + obj.day
                        }
                    }
                    this.$nextTick(this.setTabbar)

                })
                .catch(err => {
                    window.location = 'http://'+ window.location.host + '/axiosError?' + err
                })

        }
    }
</script>

<style lang="scss">
@import "blogText.scss";
</style>