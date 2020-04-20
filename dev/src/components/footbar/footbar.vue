<template>
    <footer>
        <div class="wrapper d-flex justify-space-between" :style="footbar.style">
            <div class="leftBox d-flex justify-space-between">
                <div class="site">次表面网络空间</div>
                <div class="git">GitHub:
                    <a href="https://github.com/Lucadian" target="_blank" class="pl-1">
                        Lucadian<v-icon x-small color="#005698">mdi-open-in-new</v-icon>
                    </a>
                </div>
                <div class="weixin">WeChat:
                    <a @click="showContacts">Arcadia_liu</a>
                    <v-icon x-small class="mb-3">mdi-chat-processing</v-icon>
                </div>
            </div>
            <div class="rightBox d-flex justify-space-between">
                <div class="vuetify">
                    Powered by <b>Vuetify</b>
                    <v-icon small style="margin-left: 2px;transform: translateY(-1px)">mdi-vuetify</v-icon>
                </div>
                <div class="ICP">鲁ICP备<span>20012977</span>号</div>
            </div>
        </div>
        <transition name="fade">
            <div class="mask" v-if="visible.contacts" @click.self="hideContacts">
                <div class="cage">
                    <v-img :class="{glow:isLoaded}" @load="isLoaded = true"
                           :src="QRCodeImg"
                           aspect-ratio="1"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    <div class="weixinName">
                        Arcadia_liu
                        <v-btn icon @click="copy('Arcadia_liu')" class="ml-n1 mb-1" color="white">
                            <v-icon small color="#60d0ff">mdi-content-copy</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </transition>
        <v-snackbar light vertical top v-model="copied" color="#ebebeb" class="black--text">
            Arcadia_liu 已复制到剪贴板
            <v-btn text color="#c60000" @click="copied = false">
                关闭
            </v-btn>
        </v-snackbar>
    </footer>
</template>

<script>
    import { imageHost } from '@/assets/host'
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "footBar",
        data(){
            return {
                isLoaded :false,
                QRCodeImg:imageHost + '/images/wechat.png',
                copied:false
            }
        },
        computed:{
            ...mapState(['visible','footbar']),

        },
        methods:{
            ...mapMutations(['hideScrollbar','showScrollbar']),
            showContacts(){
                this.visible.contacts = true
                this.hideScrollbar()
            },
            hideContacts(){
                this.visible.contacts = false
                this.showScrollbar()
            },
            copy(str){
                // 创建input标签存放需要复制的文字
                let input = document.createElement('input');
                // 把文字放进input中，供复制
                input.value = str;
                document.body.appendChild(input);
                // 选中创建的input
                input.select();
                // 执行复制方法， 该方法返回bool类型的结果，告诉我们是否复制成功
                document.execCommand('copy')
                // 操作中完成后 从Dom中删除创建的input
                document.body.removeChild(input)
                this.copied = true
            },
            aaa(){
                console.log(123)
            }

        },

    }
</script>

<style scoped lang="scss">
footer{
    color: #505050;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-align: center;
    position: relative;
    .wrapper{
        width: 67rem;
        height: 4.5rem;
        line-height: 4.2rem;
        margin: 0 auto;
        &.shorten{
            max-width: 57rem;
        }
        @media(max-width: 67rem) {
            width: 100vw!important;
        }
        @media(max-width: 600px) {
            padding: 0 0.6rem;
            border-top: 1px solid rgba(0,0,0,.1);
            background-color: white;
        }
        a{
            color: #004f92;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
    .leftBox{
        .site{
            color: #7c7c7c;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 1px;
            @media(max-width: 800px){
                display: none;
            }
        }
        .git{
            margin-left: 40px;
            @media(max-width: 800px){
                margin-left: 0;
            }
            @media(max-width: 600px) {
                display: none;
            }
        }
        .weixin{
            margin-left: 25px;
            @media(max-width: 600px) {
                margin-left: 0;
            }

        }


    }
    .rightBox{
        .vuetify{
            margin-right: 40px;
            @media(max-width: 650px){
                display: none;
            }
        }
        .ICP{
            font-weight: bold;
            color: #5e5e5e;
            span{
                margin: 0 0.2rem;
            }
        }
    }
    .mask{
        position: fixed;top: 0;
        color: #60d0ff;
        background-color: #373D44;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        .cage{
            width: 160px;
            height: 230px;
            margin-top: 30vh;
            @media(max-width:1930px){
                transform: scale(.8);
            }
            .v-image{
                display: block;
                margin: 0 auto;
                width: 160px;
                height: 160px;
                &.glow{
                    background-color: white;
                    box-shadow: 0 0 8px white,0 0 12px white,0 0 16px white,0 0 32px white,0 0 80px white;
                }
            }
            .weixinName{
                /*text-shadow: 0 0 4px black;*/
                transform: translateX(12px) translateY(35px);
                font-size: 20px;
                text-align: center;
            }
        }

    }
</style>