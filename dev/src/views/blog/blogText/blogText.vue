<template>
    <div class="blogText">
        <div class="month" v-for="(month,idx) in blogs">
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
                        <div class="day-label" :id="'log_' +  month.moty + day.dotm">
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
        <viewer :path="path" />
    </div>
</template>

<script>
    import { albumHost } from '@/assets/host'
    import viewer from '@/components/viewer/viewer'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: "blogText",
        data(){
            return {
                blogs:[],
                path:{
                    value:''
                }
            }
        },
        computed:{
            ...mapState(['headbar','hash']),
            isMobile(){
                return this.$vuetify.breakpoint.smAndDown
            },
            subtitle(){
                if(this.blogs.length)
                    return this.year + '.' + this.blogs[this.blogs.length - 1].moty + ' ~ ' + this.blogs[0].moty + ''
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
                return albumHost + '/content/album/日志图片/' + path
            }

        },
        components:{
            viewer
        },
        props:['year'],
        created() {
            this.headbar.valid.aug = true
            if(this.isMobile)
                this.headbar.title = ''
            else
                this.headbar.title =  '日志'

            axios.get('http://'+ window.location.host + '/archive/blog/' + this.year + '.json' )
                .then( response => {
                    this.blogs = response.data
                    this.hash.queryVal = this.subtitle
                })
                .catch(err => {
                    window.location = 'http://'+ window.location.host + '/error?' + err
                })
        }
    }
</script>

<style lang="scss">
@import "blogText.scss";
</style>