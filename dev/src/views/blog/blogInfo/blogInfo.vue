<template>
    <div class="blogInfo d-flex">
        <div>
            <v-icon x-small class="mr-0 hidden-xs-only" color="#ef5a5a" style="transform: translateY(-1px)">mdi-camera-control</v-icon>
            合计 {{ info.total }} 条
        </div>
        <div class="">
            {{ info.mean }} 天 / 记录
        </div>
        <v-spacer></v-spacer>
        <div>
            <v-icon x-small :dark="!$vuetify.breakpoint.xs" class="mr-1 pb-0">mdi-link-variant</v-icon>来源 : 大祖玛
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogInfo",
        props:['info']
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/style.theme.scss";
    div.blogInfo{
        position: relative;
        color: white;
        user-select: none;
        font-style: normal;
        font-weight: 100;
        font-size: 70%;
        background-color: #393f44;
        letter-spacing: 0.5px;
        padding: 3px 10px 3px 6px;
        box-sizing: border-box;
        border-top: 1px solid $info_thread_red!important;
        text-shadow: 0 0 3px black,1px 1px 0 black;
        border-right: .5px solid black;
        @media (max-width: 600px){
            font-weight: normal;
            border-top: 1px solid #acacac!important;
            border-right:0;
            padding: 3px 0.6rem;
            background-color: rgba(0,0,0,.05);
            color: black;
            text-shadow: none;
        }
        div{
            height: 16.8px;
            overflow-y: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
        div:not(:last-child){
            margin-right: 20px;
        }

    }
</style>