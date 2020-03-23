<template>
    <div class="sideList">
        <div class="updateList">
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
        </div>
        <v-divider/>
        <div class="recommend">

        </div>
        <div class="button">
            查看全部<v-icon dark small color="#dbdbdb" style="transform: translateX(2px) translateY(-2px)">mdi-arrow-up-bold-hexagon-outline</v-icon>
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

    div.button{
        margin: 20px 0 0 0;
        font-size: 14px;
        color:hsl(0,0,95%);
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