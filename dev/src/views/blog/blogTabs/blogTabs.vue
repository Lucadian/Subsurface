<template>
    <div class="blogTabs d-none d-md-flex justify-end">
        <div class="wrapper d-flex justify-end">
            <div class="tab gap" :class="{active:active === idx}" v-for="(item,idx) in names" v-text="item" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogTabs",
        data(){
            return {
                active:0,
                names:[
                    'Jan.',
                    'Feb.',
                    'Mar.',
                    'Apr.',
                    'May.',
                    'Jun.',
                    'Jul.',
                    'Aug.',
                    'Sep.',
                    'Oct.',
                    'Nov.',
                    'Dec.',
                ],
                timer:null
            }
        }
    }
</script>

<style scoped lang="scss">
div.blogTabs{
    position: sticky;top:85px;
    width: 720px;
    transform: translateX(-744px);
    margin-bottom: -30px;
    user-select: none;
}
div.wrapper{
    width: fit-content;
    transform-origin: right top;
    transform: rotate(-90deg);
    cursor: pointer;
    background-color: #7c7c7c;
    box-shadow: 0 0 8px #646464;
    border-radius: 4px;
    div.tab{
        position: relative;
        color: rgba(0,0,0,.6);
        font-size: 14px;
        line-height: 24px;
        width: 58px;
        height: 30px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 4px 4px 0 0;
        background-color: hsl(0,0,85%);
        &.gap:not(:first-child){
            margin-left: 1px;
        }
        &::after{
            display: block;content: '';
            position: absolute;top: 0;left: 0;
            width: 100%;height: 100%;
            background: linear-gradient(0deg,rgba(0,0,0,.7) 8%,rgba(0,0,0,.20) 24%,rgba(0,0,0,0) 45%);
        }
        &:hover{
            color: black;
            background-color: hsl(0,0,95%);
        }

    }
    div.tab.active{
        color: black;
        font-weight: bold;
        background-color: hsl(0,0,95%);
        &::after{
            background: none
        }
    }
}
</style>