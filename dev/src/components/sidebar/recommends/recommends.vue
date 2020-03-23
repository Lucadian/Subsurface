<template>
    <div class="recommends">
        <a class="item" href=""><h4>JavaScript 原型链的简易图解（Prototype chain）</h4></a>
        <a class="item" href=""><h4>测试 dadwa 阿瓦达题阿瓦达题</h4></a>
        <a class="item" href=""><h4>JavaScript 的数据类型</h4></a>
        <a class="item" href=""><h4>DOM 狂悖无道的尺寸(一) Scroll/Client/Offset</h4></a>
        <a class="item" href=""><h4>你的图片肿了么？删除元数据三种的办法</h4></a>
    </div>
</template>

<script>
    export default {
        name: "recommends"
    }
</script>

<style scoped lang="scss">
    div.recommends{

    }
    a.item{
        display: block;
        color: #606060;
        box-sizing: border-box;
        padding: 0 .5rem;
        height: 2.8rem;
        overflow: hidden;
        word-break: break-all;
        border-bottom: 1px dotted hsl(0,0,85%);
        &:last-child{
            border-bottom: none;
        }
        &:hover{
            color: black;
        }
        h4{
            font-size: 15px;
            line-height: 2.8rem;
        }
    }
</style>