<template>
    <div class="selector">
        <v-select class="d-flex d-md-none"
                  v-if="visible.arkTitle"
                  :items="tabbar.tabs"
                  :label="year + ' 年'"
                  :value="current"
                  :dark="!$vuetify.breakpoint.xs"
                  prepend-icon="mdi-calendar-month"
                  outlined dense
                  v-model="current"
        />
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "selector",
        data(){
            return {
                active:false,
                current:'',
                scrolling:null,
            }
        },
        props:['tabbar','year'],
        computed:{
            ...mapState(['visible']),
            isMobile(){
                return this.$vuetify.breakpoint.xs
            },
            currentIndex(){
                return this.tabbar.currentIndex ? Number(this.tabbar.currentIndex) : this.tabbar.tabs.length - 1
            },

        },
        watch:{
            current(val){
                if(!this.tabbar.scrolling && val){
                    this.current = ''
                    document.getElementById('month=' + parseInt(val)).scrollIntoView()
                }
            },
            currentIndex(val){
                this.current = this.tabbar.tabs[val]
                this.tabbar.scrolling = setInterval(()=>{
                    if(window.pageYOffset !== pageYOffset)
                        pageYOffset = window.pageYOffset
                    else{
                        clearInterval(this.tabbar.scrolling)
                        this.tabbar.scrolling= null
                    }
                },200)
            }
        },


    }
</script>

<style scoped lang="scss">
.selector{
    position: fixed;top: 8px;left: 12px;
    z-index: 5;
    width: 180px;
}
</style>