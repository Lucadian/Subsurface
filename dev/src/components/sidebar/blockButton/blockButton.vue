<template>
    <a class="button subtitle-2 font-weight-light" :href="href" :target="targ">
        Subsurface.cn<v-icon dark x-small color="rgba(0,0,0,.45)" style="transform: translateX(4px) translateY(-1px)">mdi-open-in-new</v-icon>
    </a>
</template>

<script>
    export default {
        name: "blockButton",
        computed:{
            tinc(){

            },
            targ(){
                return this.$vuetify.breakpoint.smAndDown ? '_self' : '_blank'
            },
            href(){
                return 'http://'+ window.location.host
            }
        }
    }
</script>

<style scoped lang="scss">
    a.button{
        display: block;
        margin: 1rem 0;
        color: #1a1a1a;
        border-radius: 3px;
        box-sizing: border-box;
        border: .5px solid #d1d1d1;
        height: 32px;
        line-height: 31px;
        text-align: center;
        cursor: pointer;
        transition: background-color .2s;
        &:hover{
            background-color: rgba(0,0,0,.03);
         /*color: white;*/
         /*background-image: radial-gradient(closest-side at 50% 50%, rgba(0,0,0,.50), rgba(0,0,0,.45));*/
        }
    }
</style>