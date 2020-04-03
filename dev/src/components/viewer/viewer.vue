<template>
    <transition name="fade">
        <div v-if="path.value" class="overlay d-flex justify-center align-center" @mousewheel="zoom">
            <div class="mobileBugFixer" @click="close" />
            <div class="wrapper" v-draggable :style="'transform:scale('+ scale +')'">
                <img :src="path.value">
                <v-btn icon x-large @click="close">
                    <v-icon x-large >mdi-close</v-icon>
                </v-btn>
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
                scale:1
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
        position: absolute;left: 0;top: 0;
        display: none;
        @media(max-width: 600px){
            display: block;
            width: 100vw;height: 100vh;
        }
    }
}
.wrapper{
    position: relative;
    transform-origin:left top;
    img{
        cursor: move;
        height: 88vh;
        border-radius: 1px;
        @media(max-width: 600px){
            height: auto;
            width: 85vw;
        }
    }
    .v-btn{
        position: absolute;top: 10px;right: 10px;
        @media(max-width: 600px){
            display: none;
        }
    }
}
</style>