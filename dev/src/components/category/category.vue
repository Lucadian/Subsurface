<template>
    <div id="category">
        <transition name="slide">
            <aside v-show="visible.category" :class="{mobile:display.isMobile}"
            >
                <div class="tabs d-flex justify-space-between">
                        <v-tabs v-model="tab" background-color="transparent"  active-class="activeTab">
                            <v-tab v-for="item in items" :key="item.tab">
                                {{ item.tab }}
                            </v-tab>
                        </v-tabs>

<!--                    <v-spacer/>-->
                    <v-btn icon large @click="visible.category = false">
                        <v-icon color="#6a6a6a" style="transform: scaleX(-1)">mdi-close</v-icon>
                    </v-btn>
                </div>
                <v-divider/>
                <v-tabs-items v-model="tab">
                    <v-tab-item
                            v-for="item in items"
                            :key="item.tab"
                    >
                        {{ item.content }}
                    </v-tab-item>
                </v-tabs-items>
                <div class="list">
                    <p>213131</p><p>213131</p><p>213131</p><p>213131</p><p>213131</p><p>213131</p><p>213131</p><p>213131</p><p>213131</p>
                </div>
                <v-divider/>
                <div class="info"></div>
            </aside>
        </transition>
        <transition name="fade">
            <div v-show="visible.category" class="overlay" @click="visible.category = false" @contextmenu.prevent="wasted"/>
        </transition>
    </div>
</template>

<script>
    import { category } from '@/assets/category'
    import { mapState } from 'vuex'
    export default {
        name: "category",
        data(){
            return {
                category,
                tabs:['文章','日志','相册'],
                tab: null,
                items: [
                    { tab: '文章', content: '文章分类' },
                    { tab: '日志', content: '日志分类' },
                    { tab: '相册', content: '相册分类' },

                ],
            }
        },
        computed:{
            ...mapState(['display','visible']),
            root(){
                return document.getElementById('html')
            },
            head(){
                return document.getElementById('headbar')
            }
        },
        methods:{
            wasted(){
                this.visible.category = false
                return false
            },
            aaa(){
                return false
            }
        },
        updated(){
                if(this.visible.category){
                    this.root.classList.remove('scroller')
                    if(!this.display.isMobile)
                        this.head.classList.remove('scroller')
                }
                else{
                    this.root.classList.add('scroller')
                    if(!this.display.isMobile)
                        this.head.classList.add('scroller')
                }

        },

        mounted(){
            this.root.classList.add('scroller')
            this.head.classList.add('scroller')
        }
    }
</script>

<style scoped lang="scss">
    .slide-enter-active {
        transition: transform .3s;
    }
    .slide-leave-active {
        transition: transform 0.3s;
    }
    .slide-enter, .slide-leave-to {
        transform: translateX(26rem);
    }
aside{
    position: fixed;right: 0;top: 0;
    z-index: 20;
    width: 27rem;
    height: 100vh;
    background-color: #ebebeb;
    &.mobile{
        width: 78vw;
    }

}
.activeTab {

}
.theme--light.v-tabs-items{
    background-color: transparent;
}
div.overlay{
    position: fixed;
    background-color: rgba(48,53,58,.75);
    width: 100vw;
    height: 100vh;
    z-index: 5;
}
</style>