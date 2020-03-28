<template>
    <v-app-bar app flat :shrink-on-scroll="headbar.style.shrink" >
        <div id="headbar" class="wrapper scroller d-flex align-center" :class="{ shorten : !headbar.style.shrink }">
            <transition name="headbarSlide">
                <h4  v-if="title"
                     :class="{fix:visible.contacts}"
                     v-text="visible.contacts ? '微信二维码' : headbar.title.value"
                />
                <div v-if="search" class="search d-flex" :class="{mobile:display.isMobile}">
                    <div class="prefix d-none d-sm-flex" v-text="prefix"/>
                    <input ref="search" type="search" v-model="value"
                           :placeholder="placeholder"
                           @blur="closeSearch"
                    />
                </div>
            </transition>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="resetSearch" @contextmenu.prevent="wasted">
                <v-icon>{{ title ? 'mdi-magnify':'mdi-magnify-close' }}</v-icon>
            </v-btn>
            <v-btn icon dark @click="showCategory" @contextmenu.prevent="wasted">
                <v-icon style="transform: translateY(-1px)">mdi-apps</v-icon>
            </v-btn>

        </div>
    </v-app-bar>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "headbar",
        data(){
            return {
                timer:null,
                search:false,
                value:'',
                title:true
            }
        },
        computed:{
            ...mapState(['headbar','display','visible']),
            placeholder(){
                return this.display.isMobile ? '文章搜索':''
            },
            prefix(){
                return '文章搜索'
            },
        },
        watch:{

        },
        methods:{
            ...mapMutations(['hideScrollbar']),
            showCategory(){
                this.visible.category = true
                this.hideScrollbar()
            },
            resetSearch(){
                this.search = false
                this.title = false
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
                            this.title = true

                        this.timer = null
                    },300)
                }
            },
            wasted(){
                return false
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
@import 'headbar';
</style>