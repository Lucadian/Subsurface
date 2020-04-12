<template>
    <caption class="ark-title d-none d-md-flex" :class="{complex:headbar.valid.complex}">
        <h4 :class="{fix:visible.contacts,title:headbar.valid.complex}"
             v-html="visible.contacts ? '微信二维码' : headbar.title"
        />
        <div class="subtitle" v-if="headbar.valid.complex"
            v-text="headbar.subtitle"
        />
    </caption>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "arkTitle",
        computed:{
            ...mapState(['headbar','visible']),
        }

    }
</script>

<style scoped lang="scss">
.ark-title{
    display: flex;
    /*align-items: baseline;*/
    &.complex{

    }
    h4{
        font-size: 90%;
        letter-spacing: 2px;
        text-align: left;
        height: 32px;
        line-height: 32px;
        overflow: hidden;
        @media(max-width: 67rem){
            max-height: 64px;
            overflow: hidden;
            font-size: 74%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        &.fix{
            @media(max-width: 67rem) {
                transform: translateX(1rem);
            }
        }
        &.title{
            padding: 0 14px;
            letter-spacing: 2px!important;
            position: relative;
            @media(max-width: 650px){
                padding: 0 7px 0 4px;
                width: 60px;
            }
            &::after{
                display: inline-block;content: '';
                position: absolute;right: 0;bottom: 5px;
                height: 20px;
                width: .5px;
                background-color: white;
            }
        }
    }
    div.subtitle{
        position: relative;
        letter-spacing: 2px;
        color: #60d0ff;
        font-size: 15px;
        padding: 0 16px 0 20px;
        height: 28px;
        line-height: 28px;
        transform: translateY(4px);
        background-color: rgba(0,0,0,.2);
        overflow: hidden;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        max-width: 600px;
        @media(max-width: 900px){
            max-width: 400px;
        }
        @media(max-width: 650px){
            padding: 0 14px;
            max-width: 200px;
        }
        &::before{
            position: absolute;
            top: -1px;left: 10px;
            display: inline-block;content: '"';
            @media(max-width: 650px){
                left: 4px;
            }
        }
        &::after{
            position: absolute;
            top: -1px;right: 7px;
            display: inline-block;content: '"';
        }
    }
}
</style>