<template>
    <div class="blogInfo d-flex">
        <div>
            <v-icon x-small class="mr-0" color="#ef5a5a" style="transform: translateY(-1px)">mdi-camera-control</v-icon>
            合计 66 条
        </div>
        <div class="">
            5 天 / 记录
        </div>
        <v-spacer></v-spacer>
        <div>
            <v-icon x-small dark class="mr-1 pb-0">mdi-link-variant</v-icon>来源 : 大祖玛
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogInfo"
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
        padding: 3px 10px 2px 6px;
        box-sizing: border-box;
        border-top: 1px solid $info_thread_red!important;
        text-shadow: 0 0 3px black,1px 1px 0 black;
        border-right: .5px solid black;
        @media (max-width: 600px){
            border-right:0;
            padding: 3px 0.6rem;
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