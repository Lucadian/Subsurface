<template>
    <v-app-bar app flat :shrink-on-scroll="headbar.valid.shrink" >
        <div id="headbar" class="wrapper scroller d-flex align-center" :style="headbar.style">
            <transition name="headbarSlide">
                <ark-title v-if="visible.arkTitle" />
                <div v-if="search" class="search d-flex" :class="{mobile:display.isMobile}">
                    <div class="prefix d-none d-sm-flex" v-text="prefix"/>
                    <input ref="search" type="search" v-model="value"
                           :placeholder="placeholder"
                           @blur="closeSearch"
                           @keypress.enter="query"
                    />
                </div>
            </transition>
            <v-spacer/>
            <v-btn icon dark @click="resetSearch" @contextmenu.prevent="wasted">
                <v-icon>{{ visible.arkTitle ? 'mdi-magnify':'mdi-magnify-close' }}</v-icon>
            </v-btn>
            <v-btn icon dark @click="showCategory" @contextmenu.prevent="wasted">
                <v-icon style="transform: translateY(-1px)">mdi-apps</v-icon>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import arkTitle from './arkTitle/arkTitle'
    export default {
        name: "headbar",
        data(){
            return {
                timer:null,
                search:false,
                value:'',
            }
        },
        computed:{
            ...mapState(['headbar','display','visible','hash']),
            placeholder(){
                return this.display.isMobile ? '文章搜索':''
            },
            prefix(){
                return '文章搜索'
            },
        },
        components:{
            arkTitle
        },
        methods:{
            ...mapMutations(['hideScrollbar','rewriteHash']),
            showCategory(){
                this.visible.category = true
                this.hideScrollbar()
            },
            resetSearch(){
                this.search = false
                this.visible.arkTitle = false
                this.value = ''
                setTimeout(() => {
                    this.search = true
                },50)
            },
            closeSearch(){
                this.search = false
                if(!this.timer){
                    this.timer = setTimeout(()=>{
                        if(!this.search)
                            this.visible.arkTitle = true

                        this.timer = null
                    },300)
                }
            },
            wasted(){ //右键取消功能
                return false
            },
            query(){ //文章搜索功能
                if(this.$route.name === 'query'){
                    this.hash.queryKey = 'search'
                    this.hash.queryVal = this.value
                    this.hash.page = 1
                    this.rewriteHash()
                    this.search = false
                }
                else{
                    if(this.display.isMobile)
                        window.location = window.location.origin + '/#search=' + this.value
                    else
                        window.open(window.location.origin + '/#search=' + this.value)
                }
            }
        },
        updated() {
            if(this.$refs.search)
                this.$refs.search.focus()

        },

    }
</script>

<style scoped lang="scss">
    .headbarSlide-enter-active {
        transition: opacity .3s,transform .3s;
    }
    .headbarSlide-leave-active {
        display: none;
        transition: opacity 0,transform 0;
    }
    .headbarSlide-enter, .headbarSlide-leave-to {
        opacity: 0;
        transform: translateY(8px);
    }
@import 'headbar.scss';
</style>