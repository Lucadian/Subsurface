<template>
    <div class="mask" @click.self="close">
        <div class="cage">
            <vue-qrcode :value=url tag="img" :options="options"/>
        </div>
        <div class="url">{{ url }}</div>
        <div class="btn_return">
            <v-btn icon x-large @click="close">
                <v-icon large color="white">mdi-redo-variant</v-icon>
            </v-btn>
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
                url:'',
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
        created(){
            let href =  decodeURI(window.location.href)
            if(window.location.hostname === 'localhost')
                href = href.replace(/localhost/g,'192.168.2.2')

            this.url = href
        }
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
        .cage{
            margin: 29vh auto 0 auto;
            @media(max-width:1930px){
                transform: scale(.8);
            }
            img{
                display: block;
                margin: 0 auto;
                background-color: white;
                box-shadow: 0 0 8px white,0 0 12px white,0 0 16px white,0 0 32px white,0 0 80px white;
            }

        }
        .url{
            text-align: center;
            width: 90vw;
            margin: 5vh auto;
            height: 24px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
        div.btn_return{
            width: 52px;
            margin: 40px auto 0 auto;
        }
    }
</style>