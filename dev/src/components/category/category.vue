<template>
    <div id="category">
        <transition name="slide">
            <aside v-show="visible.category" :class="{mobile:display.isMobile}">
                123
            </aside>
        </transition>
        <transition name="fade">
            <div v-show="visible.category" class="overlay" @click="visible.category = false"/>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "category",
        data(){
            return {

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
    .fade-enter-active {
        transition: opacity .3s;
    }
    .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
        opacity:0;
    }
aside{
    pointer-events: none;
    position: fixed;right: 0;top: 0;
    z-index: 20;
    width: 27rem;
    height: 100vh;
    background-color: #ebebeb;
    &.mobile{
        width: 78vw;
    }

}
div.overlay{
    position: fixed;
    background-color: rgba(48,53,58,.75);
    width: 100vw;
    height: 100vh;
    z-index: 5;
}
</style>