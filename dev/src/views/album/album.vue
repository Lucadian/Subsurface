<template>
    <div class="album">
        <v-content>
            <v-container fluid>
                <v-row>
                    <v-col cols="6" sm="4" md="3" v-for="img in imgs">
                        <v-lazy class="box"
                                transition="fade-transition"
                                :min-height="minHeight"
                                :options="{
                                    rootMargin:'0px 0px -200px 0px'
                                }"
                        >
                                <img :src="getRelativePath(img)" :alt="img" @click="showViewer">
                        </v-lazy>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <viewer :path="path" />
    </div>

</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import viewer from '@/components/viewer/viewer'
    import axios from 'axios'

    const album = require('@/assets/category/album')
    export default {
        name: "album",
        data(){
            return {
                imgs:[],
                path:{
                    value:''
                }
            }
        },
        computed:{
            ...mapState(['headbar','footbar','visible','hash']),
            minHeight(){
                return this.$vuetify.breakpoint.smAndDown ? 160 : 230
            },
            dirname(){
                let name = this.gallery
                for(let i=0;i<album.length;i++){
                    if(album[i].title === name)
                        return album[i].dir
                }
            }
        },
        methods:{
            ...mapMutations(['hideScrollbar']),
            showViewer(){
                this.hideScrollbar()
                this.path.value = event.currentTarget.getAttribute('src')
            },
            getRelativePath(src){
                return '/content/album/'+ this.dirname + '/' + src
            }
        },
        props:[
            'gallery'
        ],
        components:{
            viewer
        },
        created(){
            this.headbar.style = 'width:1120px'
            this.footbar.style = 'width:1120px'
            this.headbar.valid.aug = true
            this.headbar.title =  '相册'
            this.hash.queryVal = this.gallery
            axios.get('http://'+ window.location.host + '/archive/album/' + this.dirname + '.json?_=' + Date.now())
                .then(response => {
                    this.imgs = response.data
                })
                .catch(err => {
                    // window.location = 'http://'+ window.location.host + '/error?' + err
                })
        }
    }

</script>

<style scoped lang="scss">
@import 'album.scss';
</style>