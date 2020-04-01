<template>
    <div class="list">
        <div class="aRow" v-for="item in archive">
            <div class="wrapper d-flex justify-space-between">
                <div class="aside">
                    <a class="cover" :href="href(item.dir,item.file)" :target="targ">
                        <img :src=src(item.cover)>
                    </a>
                </div>
                <div class="content">
                    <div class="title">
                        <a :href="href(item.dir,item.file)" :target="targ">
<!--                            @touchend="location(item.dir,item.file)"-->
                            <h5 v-text="item.title" />
                        </a>
                    </div>
                    <div class="notes d-flex font-weight-light">
                        <div>修改：{{item.lastEdited}}</div>
                        <div>目录：{{item.dir}}</div>
                    </div>
                    <div class="brief" v-text="item.brief"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { domain } from '@/assets/domain'
    import { archive } from '../archive'
    import { mapState } from 'vuex'

    export default {
        name: "list",
        data(){
            return {
                archive,
                domain
            }
        },
        computed:{
            ...mapState(['display']),
            path(){
                return 'http://' + window.location.host + '/article/'
            },
            targ(){
                return this.display.isMobile ? '_self' : '_blank'
            }
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
    }
</script>

<style scoped lang="scss">
@import 'list.scss';
</style>