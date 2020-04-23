<template>
    <a class="button" :href="href" :target="targ">
        查看全部<v-icon dark small color="#dbdbdb" style="transform: translateX(2px) translateY(-2px)">mdi-arrow-up-bold-hexagon-outline</v-icon>
    </a>
</template>

<script>
    export default {
        name: "blockButton",
        computed:{
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
        margin: 1.06rem 0;
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
         background-image: radial-gradient(closest-side at 50% 50%, rgba(0,0,0,.60), rgba(0,0,0,.5));
        }
    }
</style>