<template>
    <div class="showcase d-flex justify-space-between align-center">

        <!--当前页面二维码-->
        <v-tooltip right open-delay="300" nudge-top="6" nudge-right="4" transition="fade-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on" @click="$emit('showQRCode')">
                    <v-icon large color="#424242">mdi-qrcode</v-icon>
                </v-btn>
            </template>
            <div>
                移动端浏览
            </div>
        </v-tooltip>

        <v-spacer></v-spacer>

        <!--logo 和 title-->
        <div class="title d-flex flex-column justify-space-between">
            <div class="d-flex justify-space-between align-center">
                <div class="imageBox">
                    <img :src="imageHost + '/images/icons/icon_brain_rect.png'">
                </div>
                <h5>次表面</h5>
            </div>
            <p>subsurface.cn</p>
        </div>

    </div>
</template>

<script>
    import { imageHost } from '@/assets/host'
    export default {
        name: "showcase",
        data(){
            return {
                imageHost,
            }
        },
    }
</script>

<style scoped lang="scss">
    div.v-tooltip__content{
        color:black;
        background-color: #EBEBEB;
        padding: 4px 12px;
        border: 1px solid #c4c4c4!important;
        &::before{
            position: absolute;left: -10px;bottom: 5px;
            display:inline-block;content: '';
            width:0;height:0;
            border-top: 4px solid transparent;
            border-right: 10px solid #c4c4c4;
            border-bottom: 4px solid transparent;
        }
    }
    div.showcase{
        box-sizing: border-box;
        padding: 0 31px 20px 22px;
        height: 100px;
        div.title{
            border-left: 3px solid #0090ff;
            padding-left: 7px;
            height: 38px;

            div{
                h5{
                    font-size: 24px;
                    line-height: 24px;
                    letter-spacing: 1px;
                    transform: translateX(2px);
                }
                div.imageBox{
                    width: 18px;
                    height: 23px;
                    img{
                        transform: translateY(-1px);
                        width: 100%;
                        max-height: 100%;
                    }
                }

            }

            p{
                font-weight: bold;
                font-size: 15px;
                line-height: 15px;
                margin: 0 0 -3px -1px;
                letter-spacing: 0;
            }

        }
    }
</style>