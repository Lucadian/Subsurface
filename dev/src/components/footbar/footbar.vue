<template>
    <footer>
        <div class="wrapper d-flex justify-space-between">
            <div class="leftBox d-flex justify-space-between">
                <div class="site">次表面网络空间</div>
                <div class="git d-none d-sm-flex">GitHub:
                    <a href="https://github.com/Lucadian" target="_blank" class="pl-1">
                        Lucadian<v-icon x-small color="#005698">mdi-open-in-new</v-icon>
                    </a>
                </div>
                <div class="weixin d-none d-sm-flex">WeChat:
                    <a @click="valid.contacts = true">Arcadia_liu</a>
                    <v-icon x-small class="pb-5">mdi-chat-processing</v-icon>
                </div>

            </div>
            <div class="rightBox d-flex justify-space-between">
                <div class="vuetify d-none d-sm-flex">Powered by <b>Vuetify</b>
                    <v-icon small style="margin-left: 2px;transform: translateY(-1px)">mdi-vuetify</v-icon>
                </div>
                <div class="ICP">鲁ICP备<span>19057389</span>号</div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "footBar",
        computed:{
            ...mapState(['visible'])
        }
    }
</script>

<style scoped lang="scss">
footer{
    color: #505050;
    font-size: 13px;
    letter-spacing: 0.5px;
    position: relative;
    text-align: center;
    .wrapper{
        width: 67rem;
        height: 4.5rem;
        padding: 1.2rem 0;
        margin: 0 auto;
        a{
            color: #004f92;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}

    .leftBox{
        div.git{
            margin-left: 40px;
        }
        div.weixin{
            margin-left: 20px;
        }
        .site{
            font-size: 14px;
            font-family: 黑体;
            letter-spacing: 0;
        }

    }

</style>