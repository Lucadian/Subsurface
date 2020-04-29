<template>
    <div class="recommends hidden-xs-only">
        <h4 class="item" v-for="item in items">
            <a :href="path + item.dir + '/' + item.file" :target="targ" v-text="item.title" />
        </h4>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: "recommendation",
        data(){
            return {
                items:[]
            }
        },
        computed:{
            ...mapState(['display']),
            targ(){
                return this.display.isMobile ? '_self' : '_blank'
            },
            path(){
                return 'http://' + window.location.host + '/essay/'
            }
        },
        created() {
            axios.get('http://'+ window.location.host + '/archive/article/recommendation.json?_=' + Date.now())
                .then(response =>{
                    this.items = response.data
                })
                .catch(err =>{
                    window.location = 'http://'+ window.location.host + '/recommendation_err?' + err
                })
        }
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
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