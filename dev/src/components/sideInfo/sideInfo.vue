<template>
    <div class="sideInfo d-none d-sm-flex justify-space-between align-center">
        <div>
            次表面网络空间
        </div>
        <div>
            <v-icon x-small :dark="!$vuetify.breakpoint.smAndDown" class="mr-1 pb-0">mdi-chevron-down</v-icon>最近更新
        </div>
    </div>
</template>

<script>
    export default {
        name: "sideInfo"
    }
</script>

<style scoped lang="scss">
    @import "../../assets/style.theme.scss";
    div.sideInfo{
        color: white;
        user-select: none;
        font-style: normal;
        font-weight: 100;
        font-size: 70%;
        background-color: #3d4146;
        letter-spacing: 0.5px;
        padding: 3px 15px 3px 10px;
        box-sizing: border-box;
        border-top: 1px solid $info_thread_red;
        text-shadow: 0 0 3px black,1px 1px 0 black;
        @media(max-width: 950px){
            border-top: 0;
            color: black;
            font-weight: normal;
            text-shadow: none;
            border-top: 0;
            background-color: white;
        }
        @media (max-width: 600px){
            /*padding: 3px 0.6rem;*/
        }

    }
</style>