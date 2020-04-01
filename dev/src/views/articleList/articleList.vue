<template>
    <v-content>
        <list/>
        <pagination/>
    </v-content>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    import pagination from './pagination/pagination'
    import list from './list/list'
    export default {
        name: "articleList",

        computed:{
            ...mapState(['headbar']),
        },
        components:{
            list,pagination
        },
        created() {
            this.headbar.style.shrink = false
            this.headbar.style.narrow = true
            this.headbar.title = `
<style lang="scss">
    .title{
        letter-spacing: 1px;
    }
    .目录{
        position: relative;
        width: 3.3rem;
    }
    .目录::after{
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
<div class="title d-flex ml-2" >
    <div class="目录">目录</div><div class="排序说明">按更新时间排序</div>
</div>`
        }
    }
</script>

<style scoped lang="scss">

    main.v-content{
        &::before{
            display: block;content: '';
            position: fixed;top: 0;left: 0;
            width: 100vw;height: 100vh;
            background-color: hsl(0,0%,94%);
            @media(max-width: 600px){
                background-color: white;
            }
        }
    }
</style>