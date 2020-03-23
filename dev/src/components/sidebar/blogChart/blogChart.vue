<template>
    <div class="sideChart">
        <div class="header d-flex justify-space-between align-center">
            <div class="sideChart-info d-flex">
                <div class="tip">近期记录</div>
                <div class="date">2020-03-16</div>
            </div>
            <v-btn icon small @contextmenu.prevent="wasted">
                <v-icon small color="rgba(57,63,69,.6)">mdi-book-outline</v-icon>
            </v-btn>
        </div>
        <div class="preview d-flex justify-space-between">
            <div>总算把日志系统完成了，继续在重总算把日志系统完成了，继续在重</div>
            <a href="">
                <i>查</i><i style="transform: translateY(-1px)">看</i>
            </a>
        </div>
        <div class="gridBox">
            <div class="grid" v-for="n in 130">
<!--                {{n}}-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogChart",
        methods:{
            wasted(){
                return false
            }
        }
    }
</script>

<style scoped lang="scss">
@import "blogChart.scss";
</style>