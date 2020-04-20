<template>
    <div id="category">
        <transition :name="slidePcOrMobile">
            <aside v-if="activated">
                <div class="tabs d-flex justify-space-between align-center">
                        <v-tabs mobile-break-point="0"
                                :height="tabHeight" active-class="active" background-color="transparent" slider-size="3" slider-color="black" color="black"
                                v-model="index"
                        >
                            <v-tab v-for="item in items" :key="item.tab" v-text="item.tab" />
                        </v-tabs>
                    <v-btn icon large class="closeBtn_1" @click="visible.category = false">
                        <v-icon color="#6a6a6a" style="transform: scaleX(-1)">mdi-window-close</v-icon>
                    </v-btn>
                </div>
                <v-divider/>
                <div class="wrapper">
                    <div class="scrollBox" ref="scrollBox" :style="scrollBoxHeight" @scroll="debounce">
                        <v-tabs-items class="list" v-model="index">
                            <v-tab-item v-for="item in items" :key="item.tab" >
                                <div v-for="row in item.category"
                                     class="aRow d-flex justify-space-between align-center"
                                     @click="query(row.title)"
                                >
                                    <v-icon large class="icon" color="#686868" v-text="row.icon" />
                                    <div class="title">
                                        <div class="aName">{{ row.title }}</div>
                                        <div class="aInfo">{{ row.subtitle }}</div>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div class="aNum" v-text="row.num" />
                                </div>
                            </v-tab-item>
                        </v-tabs-items>
                        <v-divider/>
                        <showcase @showQRCode="showQRCode" />
                    </div>
                    <div class="hinterTop" v-if="hinterTop">︿</div>
                    <div class="hinterBtm" v-if="hinterBtm">﹀</div>
                </div>
            </aside>
        </transition>
        <transition name="fade">
            <div class="overlay" v-if="overlayed" @click="visible.category = false" @contextmenu.prevent="wasted" />
        </transition>
        <transition name="fade">
            <qrcode v-if="valid.qrcode" :valid="valid"/>
        </transition>
    </div>
</template>

<script>
    import { article } from '@/assets/category/article'
    import { blog } from '@/assets/category/blog'
    import { album } from '@/assets/category/album'
    import { mapState,mapMutations } from 'vuex'
    import showcase from './showcase/showcase'
    import qrcode from './qrcode/qrcode'


    export default {
        name: "category",
        data(){
            return {
                index: 0,
                route:{
                    query:0,
                    essay:0,
                    blog:1,
                    album:2
                },
                items: [
                    { tab:'文章',path:'/',       category: article },
                    { tab:'日志',path:'/blog/',  category: blog },
                    { tab:'相册',path:'/album/', category: album},
                ],
                scrolledTop:0,
                scrolledBtm:0,
                valid:{
                    qrcode:false
                },
                timer:null,
            }
        },
        computed:{
            ...mapState(['visible','hash']),
            activated(){
                return this.visible.category
            },
            isMobile(){
                return this.$vuetify.breakpoint.mdAndDown
            },
            isHomepage(){
                return this.$route.name === 'query'
            },
            tabHeight(){
                return this.isMobile ? 58 : 80
            },
            scrollBoxHeight(){
                return 'max-height:calc(100vh - ' + this.tabHeight + 'px)'
            },
            slidePcOrMobile(){
                return this.isMobile ? 'slideMobile' : 'slidePC'
            },
            overlayed(){
                return (this.$route.name !== 'query' || this.isMobile) && this.visible.category
            },
            hinterTop(){
                return this.scrolledTop > 50
            },
            hinterBtm(){
                return this.scrolledBtm > 50
            },
        },
        components:{
            showcase,qrcode
        },
        watch:{
            activated(val){
                if(val){
                    //处理分类列表的滚动提示箭头
                    setTimeout(()=>{
                        let box = this.$refs.scrollBox
                        this.scrolledTop = box.scrollTop
                        this.scrolledBtm = box.scrollHeight - box.clientHeight - box.scrollTop
                    },400)
                    //处理是否隐藏滚动条
                    if(this.$route.name !== 'query' || this.isMobile)
                        this.hideScrollbar()
                    //重置 tab 选项卡位置
                    this.index = this.route[this.$route.name]
                }
                else{
                    if(this.$route.name !== 'query' || this.isMobile)
                        this.showScrollbar()

                }
            },

        },
        methods:{
            ...mapMutations(['showScrollbar','hideScrollbar','rewriteHash']),
            wasted(){
                this.visible.category = false
                return false
            },
            showQRCode(){
                this.visible.category = false
                if(this.visible.contacts)
                    this.visible.contacts = false
                this.valid.qrcode = true
            },
            query(val){
                console.log(val)
                let href
                switch (this.index){
                    case 0:
                        if(this.isHomepage){
                            this.hash.queryKey = 'category'
                            this.hash.queryVal = val
                            this.hash.page = 1
                            this.rewriteHash()
                            if(this.isMobile)
                                this.visible.category = false
                        }
                        else{
                            href = 'http://' + window.location.host + '/#category=' + val
                            this.goToPage(href)
                        }
                        break
                    case 1:
                        href = 'http://' + window.location.host + '/blog/' + parseInt(val)
                        this.goToPage(href)
                        break
                    case 2:
                        href = 'http://' + window.location.host + '/album/' + val
                        this.goToPage(href)
                        break
                }
            },
            goToPage(href){
                if(this.isMobile)
                    window.location.href = href
                else
                    window.open(href)
            },
            hints(){
                let box = this.$refs.scrollBox
                this.scrolledTop = box.scrollTop
                this.scrolledBtm = box.scrollHeight - box.clientHeight - box.scrollTop
            },
            debounce() {
                if(!this.timer){
                    this.timer = setTimeout(()=>{
                        this.timer = null
                        this.hints()
                    },200)
                }

            }

        },

    }
</script>

<style scoped lang="scss">
@import "category.scss";
</style>