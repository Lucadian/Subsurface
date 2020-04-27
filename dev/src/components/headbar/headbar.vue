<template>
    <v-app-bar app flat :shrink-on-scroll="headbar.valid.shrink">
        <div id="headbar" class="wrapper scroller d-flex align-center" :style="headbar.style">
            <transition name="headbarSlide">
                <ark-title v-if="visible.arkTitle" />
                <div v-if="search" class="search d-flex" :class="{mobile:$vuetify.breakpoint.smAndDown}">
                    <div class="prefix d-none d-md-flex" v-text="prefix"/>
                    <input ref="search" type="search" v-model="value"
                           :placeholder="placeholder"
                           @blur="closeSearch"
                           @keypress.enter="query"
                    />
                </div>
            </transition>
            <v-spacer/>
            <v-tooltip bottom nudge-bottom="5" transition="fade" open-delay="300">
                <template v-slot:activator="{ on }">
                    <v-btn icon :dark="!isMobile" @click="resetSearch" @contextmenu.prevent="wasted" v-on="on">
                        <v-icon>{{ visible.arkTitle ? 'mdi-magnify':'mdi-magnify-close' }}</v-icon>
                    </v-btn>
                </template>
                <span>查找</span>
            </v-tooltip>

            <v-tooltip bottom nudge-bottom="5" transition="fade" open-delay="300">
                <template v-slot:activator="{ on }">
                    <v-btn icon :dark="!isMobile" @click="visible.category = !visible.category" @contextmenu.prevent="wasted" v-on="on">
                        <v-icon class="mdi-flip-h" style="transform: translateY(-1px)">{{ visible.category ? 'mdi-undo-variant' : 'mdi-apps' }}</v-icon>
                    </v-btn>
                </template>
                <span>侧栏</span>
            </v-tooltip>
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
            ...mapState(['headbar','visible','hash']),
            isMobile(){
                return this.$vuetify.breakpoint.xs
            },
            placeholder(){
                return this.isMobile ? '文章搜索':''
            },
            prefix(){
                return '文章搜索'
            },
        },
        components:{
            arkTitle
        },
        methods:{
            ...mapMutations(['rewriteHash']),
            resetSearch(){
                this.search = false
                this.visible.arkTitle = false
                this.value = ''
                setTimeout(() => {
                    this.search = true
                },5)
            },
            closeSearch(){
                this.search = false
                if(!this.timer){
                    this.timer = setTimeout(()=>{
                        if(!this.search)
                            this.visible.arkTitle = true

                        this.timer = null
                    },110)
                }
            },
            wasted(){ //右键取消功能
                return false
            },
            query(){ //文章搜索功能
                if(this.value){
                    if(this.$route.name === 'query'){
                        this.hash.queryKey = 'search'
                        this.hash.queryVal = this.value
                        this.hash.page = 1
                        this.rewriteHash()
                        this.closeSearch()
                    }
                    else{
                        if(this.$vuetify.breakpoint.smAndDown)
                            window.location = window.location.origin + '/#search=' + this.value
                        else
                            window.open(window.location.origin + '/#search=' + this.value)
                    }
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
        transition: opacity .1s,transform .1s;
    }
    .headbarSlide-leave-active {
        display: none;
        transition: opacity 0,transform 0;
    }
    .headbarSlide-enter, .headbarSlide-leave-to {
        opacity: 0;
        transform: translateY(6px);
    }
@import 'headbar.scss';
</style>