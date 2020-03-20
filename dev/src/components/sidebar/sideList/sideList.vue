<template>
    <div class="sideList">
        <div class="item d-flex" v-for="n in 6">
            <div class="cover">
                <img :src=src alt="">
            </div>
            <div class="preview">
                <div class="title">
                    <h4>DOM 狂悖无道的尺寸(一) Scroll/Client/Offset</h4>
                </div>
                <div class="date">
                    <v-icon x-small dark class="mr-1" color="#b30000" style="transform: translateY(-1px)">mdi-text-box-outline</v-icon>
                    2019-11-05
                </div>
            </div>
        </div>
        <div class="button">
            最近更新<v-icon dark small color="#dbdbdb" style="transform: translateX(2px) translateY(-2px)">mdi-arrow-up-bold-hexagon-outline</v-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sideList",
        data(){
            return {
                src:'http://www.subsurface.cn.obs.cn-east-3.myhuaweicloud.com/images/covers/cover_vue.png'
            }
        }
    }
</script>

<style scoped lang="scss">
    div.sideList{
        margin-top: 1.2rem;
    }
    div.item{
        padding: 0.6rem 0;
        div.cover{
            width: 34%;
            height: 3.75rem;
            overflow: hidden;
            border: 1px solid #c5c5c5;
            border-radius: 1px;
            @media(max-width: 720px){
                width: 27%;
            }
            &:hover{
                border: 1px solid #42474C;
            }
            img{
                object-fit: cover;
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
        }
        div.preview{
            position: relative;
            width: 66%;
            height: 3.75rem;
            padding: 0 9px 0 11px;
            @media(max-width: 720px){
                width: 72%;
            }
            div.title{
                width: 100%;
                letter-spacing: .5px;
                overflow: hidden;
                height: 35px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                h4{
                    color:rgba(0,0,0,.7);
                    text-align: justify;
                    word-break: break-all;
                    cursor: pointer;
                    font-size: 15px;
                    line-height: 18px;
                    &:hover{
                        color:#b30000;
                    }
                }
            }

            div.date{
                position: absolute;bottom: 0;
                width: 94%;
                font-size: 12px;
            }
        }
    }
    div.button{
        margin: 20px 0 0 0;
        font-size: 14px;
        color:rgba(255,255,255,.8);
        border-radius: 3px;
        background-color: rgba(0,0,0,.35);
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        letter-spacing: 2px;
        &:hover{
            color: white;
            /*background-color: rgba(0,0,0,.65);*/
            background-image: radial-gradient(closest-side at 50% 50%, rgba(0,0,0,.60), rgba(0,0,0,.5));
        }
    }
</style>