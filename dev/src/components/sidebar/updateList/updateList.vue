<template>
    <div class="updateList">
        <div class="item d-flex" v-for="item in items">
            <a class="cover" :href="articlePath + item.dir + '/' + item.file" :target="targ">
                <img :src="imagePath + item.cover" alt="">
            </a>
            <div class="preview">
                <a class="title" :href="articlePath + item.dir + '/' + item.file" :target="targ">
                    <h4 v-text="item.title"/>
                </a>
                <div class="date">
                    <v-icon x-small dark class="mr-1" color="#b30000" style="transform: translateY(-1px)">mdi-text-box-outline</v-icon>
                    {{ item.edited }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { imageHost } from '@/assets/host'
    import { mapState } from 'vuex'
    import axios from 'axios'
    export default {
        name: "updateList",
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
            articlePath(){
                return 'http://' + window.location.host + '/essay/'
            },
            imagePath(){
                return imageHost + '/images/'
            }
        },
        methods:{

        },
        created() {
            axios.get('http://'+ window.location.host + '/archive/article/updates.json?_=' + Date.now())
                .then(response =>{
                    this.items = response.data
                })
                .catch(err =>{
                    window.location = 'http://'+ window.location.host + '/updateList_err?' + err
                })
        }
    }
</script>

<style scoped lang="scss">
    div.updateList{
        margin: 1.2rem 0;
    }

    div.item{
        padding: 0.6rem 0;
        &:hover h4{
            color: black!important;
        }
        a.cover{
            display: block;
            width: 34%;
            height: 3.75rem;
            overflow: hidden;
            border: 1px solid #c5c5c5;
            border-radius: 1px;
            @media(max-width: 720px){
                width: 27%;
            }
            &:hover{
                border: 1px solid #42474C;
            }
            img{
                object-fit: cover;
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
        }
        div.preview{
            position: relative;
            width: 66%;
            height: 3.75rem;
            padding: 0 9px 0 11px;
            @media(max-width: 720px){
                width: 72%;
            }
            a.title{
                display: block;
                width: 100%;
                letter-spacing: .5px;
                overflow: hidden;
                height: 35px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                h4{
                    color:#606060;
                    text-align: justify;
                    word-break: break-all;
                    cursor: pointer;
                    font-size: 15px;
                    line-height: 18px;
                }
            }

            div.date{
                position: absolute;bottom: 0;
                width: 94%;
                font-size: 12px;
            }
        }
    }
</style>