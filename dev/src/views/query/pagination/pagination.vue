<template>
    <div id="pagination" v-if="total > 1" class="d-flex justify-center align-center">
        <a class="home" :class="{invalid:current === 1}" @click="home">首 页</a>
        <a class="prev" :class="{invalid:current === 1}" @click="prev">上一页</a>
        <div class="page">
            <a v-for="n in numbers" :class="{current:n === current }" :href="href(n)">{{ n }}</a>
        </div>
        <a class="next" :class="{invalid:current === total}" @click="next">下一页</a>
        <a class="last" :class="{invalid:current === total}" @click="last">尾 页</a>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "pagination",
        data(){
            return{
                visibility:true,
                total:20,
                current:3,
            }
        },

        computed:{
            ...mapState(['display']),
            numbers(){
                let totalPages  = this.total,
                    currentPage = this.current,

                    max = this.display.isMobile ? 7 : 9,
                    len = totalPages >= max ? max : totalPages,
                    arr = [],
                    dis = this.display.isMobile ? 3 : 4,
                    gap = currentPage <= dis ?
                        currentPage - 1 :
                        totalPages - currentPage <= dis ?
                            dis*2 - (totalPages - currentPage) : dis

                for(let i=0;i<len;i++)
                    arr[i] = currentPage - gap + i //穷举而出的算法，不要研究，除非再次穷举一遍

                return arr
            }
        },
        methods:{
            next(){
            //     this.page.current < this.page.total && this.changePageBy(1)
            },
            prev(){
            //     this.page.current > 1 && this.changePageBy(-1)
            },
            home(){
            //     if(this.page.current > 1) this.changePageBy(1 - this.page.current)
            },
            last(){
            //     if(this.page.current < this.page.total)
            //         this.changePageBy(this.page.total - this.page.current)
            },
            href(n){
                return 'http://localhost:8080/#page=' + n
            //     if(num !== this.page.current)
            //         this.changePageBy(num - this.page.current)
            },
            changePageBy(num){
            //     this.resetListAnimation()
            //     this.page.current += num
            //     document.documentElement.scrollTop = 0
            },
            resetListAnimation(){
            //     let rows = document.getElementsByClassName('row_article')
            //     for(let i=0;i<rows.length;i++)
            //         rows[i].classList.remove('fadein_row')
            //     let index = 0
            //     let timer = setInterval(()=>{
            //         rows[index].classList.add('fadein_row')
            //         if(index === rows.length - 1)
            //             clearInterval(timer)
            //         index ++
            //     },100)
            }
        },
    }
</script>
<style scoped lang="scss">
    @import "pagination.scss";
</style>