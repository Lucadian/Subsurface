<template>
    <caption class="ark-title">
        <h4 :class="{title:headbar.valid.aug,fix:fix,border:subtitle,extend:!subtitle}"
             v-html="visible.contacts ? '微信二维码' : title"
        />
        <div class="subtitle" v-if="subtitle">
            <transition name="slide-x-transition">
                <div class="txt" v-if="sliding" v-html="subtitle"/>
            </transition>
        </div>
    </caption>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "arkTitle",
        data(){
            return {
                sliding:true
            }
        },
        computed:{
            ...mapState(['headbar','visible','hash']),
            title(){
                return this.hash.queryKey ? ( this.hash.queryKey === 'category' ? '分类列表' : '查找结果' ) : this.headbar.title
            },
            subtitle(){
                return !this.visible.contacts && this.hash.queryVal ? this.hash.queryVal : ''
            },
            fix(){
                return this.visible.contacts && this.$vuetify.breakpoint.smAndDown
            }
        },
        watch:{
            subtitle(){
                this.sliding = false
                setTimeout(()=>{
                    this.sliding = true
                },50)
            }
        }

    }
</script>

<style scoped lang="scss">
@import "arkTitle.scss";
</style>