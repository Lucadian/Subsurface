<template>
    <div id="category">
        <transition :name="slide">
            <aside v-if="visible.category">
                <div class="tabs d-flex justify-space-between align-center">
                        <v-tabs :height="tabHeight" active-class="active" background-color="transparent" slider-size="3" slider-color="black" color="black"
                                v-model="tab"
                        >
                            <v-tab v-for="item in items" :key="item.tab" v-text="item.tab" />
                        </v-tabs>
                    <v-btn icon large class="closeBtn_1" @click="hideCategory">
                        <v-icon color="#6a6a6a" style="transform: scaleX(-1)">mdi-close</v-icon>
                    </v-btn>
                </div>
                <v-divider/>
                <div class="scrollBox">
                    <v-tabs-items class="list" v-model="tab">
                        <v-tab-item v-for="item in items" :key="item.tab">
                            <div v-for="row in item.category" class="aRow d-flex justify-space-between align-center">
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
            </aside>
        </transition>
        <transition name="fade">
            <div class="overlay" v-show="visible.category" @click="hideCategory" @contextmenu.prevent="wasted" />
        </transition>
        <transition name="fade">
            <qrcode v-if="valid.qrcode" :valid="valid"/>
        </transition>
    </div>
</template>

<script>
    import { domain } from '@/assets/domain'
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
                domain,
                tab: null,
                items: [
                    { tab: '文章', category: article },
                    { tab: '日志', category: blog },
                    { tab: '相册', category: album},
                ],
                valid:{
                    qrcode:false
                }
            }
        },
        computed:{
            ...mapState(['display','visible']),
            tabHeight(){
                return this.display.isMobile ? 58 : 80
            },
            slide(){
                return this.display.isMobile ? 'slideMobile' : 'slidePC'
            }
        },
        components:{
            showcase,qrcode
        },
        methods:{
            ...mapMutations(['showScrollbar','hideScrollbar']),
            hideCategory(){
                this.visible.category = false
                this.showScrollbar()
            },
            showContacts(){
                this.visible.category = false
                this.visible.contacts = true
                this.hideScrollbar()
            },
            hideDrawerAndShowWeixin(){
                this.visible.category = false
                this.hideScrollbar()
                this.visible.contacts = true
            },
            wasted(){
                this.visible.category = false
                return false
            },
            showQRCode(){
                this.visible.category = false
                if(this.visible.contacts)
                    this.visible.contacts = false
                this.valid.qrcode = true
            }

        },

    }
</script>

<style scoped lang="scss">
@import "category.scss";
</style>