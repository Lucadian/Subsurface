<template>
    <div class="mask" @click.self="close">
        <div class="cage">
            <vue-qrcode :value=url tag="img" :options="options"/>
            <div class="url">
            </div>
        </div>
    </div>
</template>

<script>
    import vueQrcode from '@chenfengyuan/vue-qrcode'
    import { mapMutations } from 'vuex'
    export default {
        name: "qrcode",
        data(){
            return {
                url:'http://www.subsurface.cn/article/JavaScript,%E5%9F%BA%E7%A1%80/JavaScript%20%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B',
                options:{
                    errorCorrectionLevel:'L',//Possible values are low, medium, quartile, high or L, M, Q, H
                    margin:0,
                    width:180
                }
            }
        },
        props:['valid'],
        methods:{
            ...mapMutations(['showScrollbar']),
            close(){
                this.showScrollbar()
                this.valid.qrcode = false
            }
        },
        components:{
            vueQrcode
        },

    }
</script>

<style scoped lang="scss">
.mask{
        position: fixed;
        z-index: 1;
        color: white;
        background-color: #373D44;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        .cage{
            margin-top: 29vh;
            height: 180px;
            @media(max-width:1930px){
                transform: scale(.8);
            }
            img{
                display: block;
                margin: 0 auto;
                background-color: white;
                box-shadow: 0 0 8px white,0 0 12px white,0 0 16px white,0 0 32px white,0 0 80px white;
            }
            div.url{
                margin-top: 1.5rem;
                letter-spacing: 2px;
                /*color: #ededed;*/
                font-size: 17px;
                text-align: center;
                text-shadow: 0 0 6px black,0 0 3px black,;
            }
        }

    }
</style>