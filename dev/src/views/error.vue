<template>
    <v-content>
        <div class="wrapper">
            <div class="d-flex justify-center"><v-icon x-large>mdi-google-downasaur</v-icon></div>
            <div class="title">页面被恐龙吃掉了...</div>
            <a :href="home">前往首页</a>
        </div>
    </v-content>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "articleEssay",
        computed:{
            ...mapState(['headbar']),
            home(){
                return 'http://' + window.location.host
            }
        },
        created(){
            this.headbar.title = 'Subsurface.cn'
        }
    }
</script>

<style scoped lang="scss">
.wrapper{
    width: 100vw;
    margin: 160px auto;
    letter-spacing: 2px;
    text-align: center;
    .title{
        color: #757575;
        margin-top: 30px;
    }
    a{
        font-size:20px;
        display: block;
        margin-top: 20px;
        &:hover{
            text-decoration: underline;
        }
    }
}
</style>
