<template>
    <div class="blogText">
        <div class="month" v-for="month in blogs" v-if="month.hasRecord">
            <div class="label-month"
                 v-if="!month.isLatest"
                 v-text="'2020 年 ' + month.month + ' 月'"
            />
            <div class="daysWrapper">
                <v-lazy class="day d-flex flex-column justify-center"
                        v-if="day.log" v-for="day in month.records"
                        transition="fade-transition"
                        :min-height="calcHeight(258)"
                        :options="{
                            rootMargin:'-200px 0px'
                        }"
                >
                    <div class="contentBox">
                        <div class="day-label" :id="'log_' + year + '-' + month.month + '-' + day.day">
                            2020 - {{ month.month }} - {{ day.day }}
                        </div>
                        <div class="log" v-html="day.log"/>
                        <div class="imgs d-flex justify-space-between" v-if="imgs">
                            <div class="coverBox" v-for="img in imgs" :path="img" @click="showViewer">
                                <img :src="img" @load="aaa">
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
    import { mapMutations } from 'vuex'
    import { blogs } from './2020'
    import viewer from '@/components/viewer/viewer'

    export default {
        name: "blogText",
        data(){
            return {
                blogs,
                year:2020,
                imgs:[
                    './content/album/简奢/167f6c16113317.562a58f53f0c6.png',
                    './content/album/新古典/creative-logo-animations-1.gif',
                    './content/album/意向/15592051-4fd0670ccaad44d2.webp'
                ],
                aaaa:true,
                path:{
                    value:''
                }
            }
        },
        methods:{
            ...mapMutations(['hideScrollbar']),
            calcHeight(n){
                // 有图片建议 240，无图片建议 120
                return n
            },
            showViewer(){
                this.hideScrollbar()
                this.path.value = event.currentTarget.getAttribute('path')
            },
            aaa(){
                console.log(1)
            }
        },
        components:{
            viewer
        }
    }
</script>

<style lang="scss">
@import "blogText.scss";
</style>