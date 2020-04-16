<template>
    <div id="pagination" v-if="total > 0" class="d-flex justify-center align-center">
        <a class="home" :class="{invalid:page === 1}" @click="home">首 页</a>
        <a class="prev" :class="{invalid:page === 1}" @click="prev">上一页</a>
        <a class="page" v-for="n in numbers" :class="{current:n === page }" @click="goToPage(n)">{{ n }}</a>
        <a class="next" :class="{invalid:page === total}" @click="next">下一页</a>
        <a class="last" :class="{invalid:page === total}" @click="last">尾 页</a>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    export default {
        name: "pagi",
        data(){
            return{
                visibility:true,
            }
        },
        computed:{
            ...mapState(['hash']),
            isMobile(){
                return this.$vuetify.breakpoint.smAndDown
            },
            total(){
                return this.hash.total
            },
            page(){
                return this.hash.page
            },
            numbers(){
                let total = this.total,
                    page  = this.page,
                    max = this.isMobile ? 7 : 9,
                    len = total >= max ? max : total,
                    arr = [],
                    dis = this.isMobile ? 3 : 4,
                    gap = total <= dis*2 || page <= dis ?
                        page - 1 :
                        total - page <= dis ?
                            dis*2 - (total - page) : dis

                for(let i=0;i<len;i++)
                    arr[i] = page - gap + i //穷举而出的算法，不要研究，\\
                return arr
            },
        },
        methods:{
            ...mapMutations(['rewriteHash']),
            next(){
                this.page < this.total && this.changePageBy(1)
            },
            prev(){
                this.page > 1 && this.changePageBy(-1)
            },
            home(){
                if(this.page > 1) this.changePageBy(1 - this.page)
            },
            last(){
                if(this.page < this.total)
                    this.changePageBy(this.total - this.page)
            },
            changePageBy(num){
                this.hash.page += num
                this.rewriteHash()
            //     this.resetListAnimation()
            //     document.documentElement.scrollTop = 0
            },
            goToPage(n){
                if(n !== this.page){
                    this.hash.page =  n
                    this.rewriteHash()
                }

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
    @import "pagi.scss";
</style>