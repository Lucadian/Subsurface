<template>
    <transition name="fade">
        <div v-if="path.value"
             class="overlay d-flex justify-center align-center"
             @mousewheel="zoom"
        >
            <div class="mobileBugFixer" @click="close" />
            <div class="wrapper" v-draggable>
                <div class="scaleBox" :style="'transform:scale('+ scale +')'">
                    <img :src="path.value">
                    <v-btn icon tile @click="close">
                        <v-icon x-large >mdi-close</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import { Draggable } from 'draggable-vue-directive'
    export default {
        name: "viewer",
        data(){
            return {
                timer:null,
                scale:1,
            }
        },
        props:[
            'path'
        ],
        directives: {
            Draggable,
        },
        computed:{
            ...mapState(['display']),
        },
        methods:{
            ...mapMutations(['showScrollbar']),
            close(){
                this.scale = 1
                this.showScrollbar()
                this.path.value =''
            },
            aaa(){
                console.log(1)
            },
            zoom(){
                let e = event || window.event
                if(e.wheelDelta > 0)
                    this.scale +=0.05
                else
                    this.scale -=0.05
            },
        },

    }
</script>

<style scoped lang="scss">
.overlay{
    position: fixed;top: 0;
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
        background-color: rgba(250,250,250,.3);
        &:hover{
            background-color: rgba(250,250,250,.6);
        }
        @media(max-width: 600px){
            display: none;
        }
    }
}
</style>