<template>
    <transition name="fade">
        <div v-if="path.value"
             class="overlay d-flex justify-center align-center"
        >
            <div class="mobileBugFixer" @click="close" />
            <pinch-zoom class="wrapper"
                        v-draggable
                        overflow="visible"
                        disableZoomControl="disable"
                        backgroundColor="transparent"
            >
                <div>
                    <img :src="path.value" @dragstart.stop.prevent="wasted">
                    <v-btn icon tile dark @click="close">
                        <v-icon x-large >mdi-close</v-icon>
                    </v-btn>
                </div>
            </pinch-zoom>
        </div>
    </transition>
</template>

<script>
    import { mapMutations } from 'vuex'
    import pinchZoom from 'vue-pinch-zoom'
    import { Draggable } from 'draggable-vue-directive'

    export default {
        name: "viewer",
        data(){
            return {
                timer:null,
            }
        },
        props:[
            'path'
        ],
        directives: {
            Draggable,
        },
        watch:{
            'path.value':function(val){
                if(val)
                    this.hideScrollbar()
                else
                    this.showScrollbar()
            }
        },
        methods:{
            ...mapMutations(['hideScrollbar','showScrollbar']),
            close(){
                this.path.value =''
            },
            wasted(){
                //解决火狐拖拽打开新标签BUG
                return false
            }
        },
        components:{
            pinchZoom
        },
    }
</script>

<style scoped lang="scss">
.overlay{
    position: fixed;
    top: 0;left: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    .mobileBugFixer{
        /*修复 v-draggable 指令导致的移动端关闭按钮失效问题*/
        position: absolute;left: 0;top: 0;
        display: none;
        @media(max-width: 600px){
            display: block;
            width: 100vw;height: 100vh;
        }
    }
}
.wrapper{
    .scaleBox{
        position: relative;
    }
    img{
        cursor: move;
        max-height: 88vh;
        border-radius: 1px;
        @media(max-width: 600px){
            height: auto;
            max-width: 85vw;
        }
    }
    .v-btn{
        transition: all .4s;
        position: absolute;top: 10px;right: 10px;
        background-color: #31353A;
        @media(max-width: 600px){
            display: none;
        }
    }
}
</style>