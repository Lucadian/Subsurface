<template>
    <transition name="fade">
        <div class="poster d-flex justify-center align-center" v-if="post.value" @click.self="post.value=''">
            <div class="wrapper d-flex flex-column justify-center">
                <div class="date" v-text="post.date" />
                <div class="text" v-html="post.value"/>
                <v-btn text outlined
                       class="my-4"
                       @click="post.value=''">关闭</v-btn>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "poster",
        props:['post'],
        methods:{
            ...mapMutations(['hideScrollbar','showScrollbar'])
        },
        watch:{
            'post.value':function(val){
                if(val)
                    this.hideScrollbar()
                else
                    this.showScrollbar()
            }
        }
    }
</script>

<style scoped lang="scss">
    div.poster{
        position: fixed;
        top: 0;left: 0;
        z-index: 5;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.4);
        transform: translateX(0);
        div.wrapper{
            transform: translateY(-5vh);
            background-color: white;
            width: 700px;
            padding: 40px 28px 22px 28px;
            border-radius: 4px;
            @media(max-width: 600px) {
                transform: translateY(-15vh);
            }
            div.date{
                transform: translateY(-15px);
                font-size: 14px;
                height: 14px;
                line-height: 13px;
                padding-left: 8px;
                border-left: 5px solid rgba(0,0,0,.2);
            }
            div.text{
                word-break: break-all;
            }
        }
    }
</style>