<template>
    <v-content>
        <div class="aRow d-flex" v-for="item in archive">
            <div>
                <a class="cover" :href="href(item.dir,item.file)" @touchend="location(item.dir,item.file)" target="_blank">
                    <img :src=src(item.cover)>
                </a>
            </div>
            <div>
                <a class="title" :href="href(item.dir,item.file)" @touchend="location(item.dir,item.file)" target="_blank">
                    <h5 v-text="item.title" />
                </a>
                <div class="notes d-flex justify-start">
                    <div>修改 {{item.lastEdited}}</div>
                    <div>目录 {{item.dir}}</div>
                </div>
                <div class="brief" v-text="item.brief"/>
            </div>
        </div>
    </v-content>
</template>

<script>
    import { domain } from '@/assets/domain'
    import { mapState,mapMutations } from 'vuex'
    import { archive } from './archive'

    export default {
        name: "articleList",
        data(){
            return {
                archive,
                domain
            }
        },
        computed:{
            ...mapState(['headbar']),
            path(){
                return 'http://' + window.location.host + '/article/'
            },
        },
        methods:{
            location(dir,file){
                window.location.href = 'http://' + window.location.host + '/article/' + dir + '/' + file
            },
            href(dir,file){
                return 'http://' + window.location.host + '/article/' + dir + '/' + file
            },
            src(path){
                return this.domain.image + '/' + path
            }
        },
        created() {
            this.headbar.style.shrink = false
        }
    }
</script>

<style scoped lang="scss">
@import 'articleList.scss';
</style>