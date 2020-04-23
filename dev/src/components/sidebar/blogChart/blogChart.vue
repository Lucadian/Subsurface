<template>
    <div class="sideChart">
        <div class="header d-flex justify-space-between align-center">
            <div class="sideChart-info d-flex">
                <div class="tip">近期记录</div>
                <div class="date" v-text="date" />
            </div>
            <v-btn icon small @contextmenu.prevent="wasted" @click="goToBlog">
                <v-icon small color="rgba(57,63,69,.6)">mdi-book-outline</v-icon>
            </v-btn>
        </div>
        <div class="preview d-flex justify-space-between">
            <div v-text="brief" />
            <a :href="href" v-if="brief !== '无记录'" :target="targ" @click="showPoster">
                <i>查</i><i style="transform: translateY(-1px)">看</i>
            </a>
        </div>
        <div class="gridBox">
            <div class="grid" :class="{checked:idx === index}"
                 v-for="(item,idx) in items"
                 :index="idx"
                 @click="check"
            >
                <div class="block" :class="'rank_' + item.rank"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import axios from 'axios'

    export default {
        name: "blogChart",
        data(){
            return {
                items:[],
                index:0
            }
        },
        computed:{
            ...mapState(['blog']),
            isMobile(){
                return this.$vuetify.breakpoint.smAndDown
            },
            date(){
                let item = this.items[this.index]
                return item ? item.date : ''
            },
            brief(){
                let item = this.items[this.index]
                return item ? (item.blog ? item.blog : '无记录') : '无记录'
            },
            href(){
                if(this.date){
                    let arr = this.date.split('-')
                    return 'http://'+ window.location.host + '/blog/' + arr[0] + '#month=' + arr[1] + '&day=' + arr[2]
                }
            },
            targ(){
                return this.$route.name === 'blog' || this.isMobile ? '_self' : '_blank'
            }
        },
        methods:{
            showPoster(){
                if(this.$route.name === 'blog')
                    this.blog.blogText.date = this.date
            },
            goToBlog(){
                let year = this.date.split('-')[0]
                let href = 'http://'+ window.location.host + '/blog/' + year
                if(this.$route.name === 'blog' || this.isMobile)
                    document.body.scrollIntoView()
                else
                    window.open(href)
            },
            check(){
                this.index = parseInt(event.currentTarget.getAttribute('index'))
            },
            wasted(){
                return false
            }
        },
        created(){
            axios.get('http://'+ window.location.host + '/archive/blog/chart.json')
                .then(response =>{
                    this.items = response.data
                })
                .catch(err =>{
                    let item = {
                        date:'',
                    }
                    let arr = []
                    for(let i=0;i<130;i++){
                        arr.push(item)
                    }
                    arr[0].date = '无数据'
                    arr[0].blog = err
                    this.items = arr
                })
        }
    }
</script>

<style scoped lang="scss">
@import "blogChart.scss";
</style>