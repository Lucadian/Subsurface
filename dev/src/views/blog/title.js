export { title }

let title =
`
<!--PC端标题-->
<style lang="scss">
    .blogName{
        width: 800px;
        letter-spacing: 1px;
    }
    .标题{
        position: relative;
        width: 3.3rem;
    }
    .标题::after{
        display: inline-block;content: '';
        position: absolute;right: 0;bottom: 5px;
        height: 20px;
        width: 1px;
        background-color: white;
    }
    .排序说明{
        font-size: 80%;
        transform: translateX(12px) translateY(2px);
    }
</style>
<div class="blogName title d-none d-md-flex ml-2" >
    <div class="标题">日志</div>
    <div class="排序说明">2020年 3月 ~ 12月</div>
</div>
`