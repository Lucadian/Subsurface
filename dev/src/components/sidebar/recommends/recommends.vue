<template>
    <div class="recommends">
        <h4 class="item"><a href="">JavaScript 原型链的简易图解（Prototype chain）</a></h4>
        <h4 class="item"><a href="">测试 dadwa 阿瓦达题阿瓦达题</a></h4>
        <h4 class="item"><a href="">JavaScript 的数据类型</a></h4>
        <h4 class="item"><a href="">DOM 狂悖无道的尺寸(一) Scroll/Client/Offset</a></h4>
        <h4 class="item"><a href="">你的图片肿了么？删除元数据三种的办法</a></h4>
    </div>
</template>

<script>
    export default {
        name: "recommends"
    }
</script>

<style scoped lang="scss">
    div.recommends{
        /*background-color: rgba(0,0,0,.01);*/
    }
    h4.item{
        display: block;
        color: #606060;
        box-sizing: border-box;
        padding: 0 .5rem;
        height: 2.8rem;
        overflow: hidden;
        word-break: break-all;
        border-bottom: 1px dotted hsl(0,0,88%);
        &:last-child{
            border-bottom: none;
        }
        &:hover a{
            color: black;
        }
        a{
            color:#606060;
            font-size: 15px;
            line-height: 2.8rem;
        }
    }
</style>