<template>
    <header id="headbar" class="z-index-100" :class="{shrink:scrolled}">
        <h1>JavaScript 数组的排序方法</h1>
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "headbar",
        data(){
            return {
                scrolled:false,
                timer:null
            }
        },
        computed:{
            ...mapState(['headbar']),
        },
        methods:{
            shrink(){
                // this.scrolled = true
                console.log(1)
            },
            debounce() {
                if(!this.timer){
                    this.timer = setTimeout(()=>{
                        this.timer = null
                        console.log(1)
                    },500)
                }

            },
        },
        mounted(){
            window.addEventListener('scroll',this.debounce,true)
        },
        destroyed () {
            window.removeEventListener('scroll', this.debounce)
        }
    }
</script>

<style scoped lang="scss">
@import 'headbar';
</style>