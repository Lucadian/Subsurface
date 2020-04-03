<template>
    <div class="album">
        <v-content>
            <v-container fluid>
                <v-row>
                    <v-col cols="6" sm="4" md="3" v-for="n in 2">
                        <div class="box" @click="showViewer" path="content/album/动效参考/bread.gif">
                            <img src="content/album/动效参考/bread.gif">
                            <div class="ribbon" v-text="'测试图片测试图片测试'" />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <viewer :path="path" />
    </div>

</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import { title } from './title.js'
    import viewer from '@/components/viewer/viewer'

    export default {
        name: "album",
        data(){
            return {
                imgs:[
                    {
                        src:'content/album/动效参考/bread.gif',msg:'测试图片测试图片测试图片'
                    }
                ],
                path:{
                    value:''
                }
            }
        },
        computed:{
            ...mapState(['headbar','footbar']),
        },
        methods:{
            ...mapMutations(['hideScrollbar']),
            showViewer(){
                this.hideScrollbar()
                this.path.value = event.currentTarget.getAttribute('path')
            }
        },
        components:{
            viewer
        },
        created(){
            this.headbar.valid.shrink = false
            this.headbar.style = 'width:1120px'
            this.footbar.style = 'width:1120px'
            this.headbar.title =  title
        }
    }

</script>

<style scoped lang="scss">
div.album{
    &::before{
        display: block;content: '';
        position: fixed;top: 0;left: 0;
        width: 100vw;height: 100vh;
        background-color: #edf0f4;
        @media(max-width: 960px){
            background-color: white;
        }
    }
}
main.v-content{
    width: 1120px;
    min-height: calc(100vh - 136px);
    margin: 64px auto 0 auto;
    padding-top: 0!important;
    @media(max-width: 960px){
        margin-top: 56px;
        min-height: calc(100vh - 128px);
    }
}
div.row{
    div.col-6{
        padding: 5px;
        max-height: 280px;
        @media(max-width:780px){
            max-height: 230px;
        }
        @media(max-width:600px){
            max-height: 170px;
        }
    }
}
div.box{
    transition: all .4s;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
    box-shadow: 0;
    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,.6);
    }
    &:hover div.ribbon{
        opacity: 1;
    }
    img{
        border-radius: 1px;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    div.ribbon{
        opacity: 0;
        transition: opacity .4s .5s;
        pointer-events: none;
        position: absolute;bottom: 0;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        overflow: hidden;
        text-align: center;
        color: white;
        text-shadow: 0 0 2px black;
        background-color: rgba(0,0,0,.4);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
}

</style>