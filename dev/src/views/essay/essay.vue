<template>
    <v-content>
        <v-row>
            <v-col class="essay" cols=12 sm=8>
                <essay-info :info="info" :dirname="dirname"/>
                <essay-text :info="info" :url="url"/>
            </v-col>
            <v-col class="aside" cols=12 sm=4>
                <side-info />
                <sidebar />
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import sidebar from '@/components/sidebar/sidebar.vue'
    import sideInfo from '@/components/sideInfo/sideInfo.vue'
    import essayInfo from './essayInfo/essayInfo.vue'
    import essayText from './essayText/essayText.vue'
    export default {
        name: "essay",
        data(){
            return {
                info:{
                    str:''
                }
            }
        },
        props:[
            'dirname','subdirname','filename'
        ],
        computed:{
            category(){
                return decodeURI(this.dirname)
            },
            subclass(){
                return this.subdirname ? '/' + decodeURI(this.subdirname) : ''
            },
            url(){
                return 'http://'+ window.location.host + '/content/article/' + this.category + this.subclass + '/' + decodeURI(this.filename) + '.html?_=' + Date.now()
            }
        },
        components:{
            essayInfo,essayText,sideInfo,sidebar
        },
    }
</script>

<style scoped lang="scss">
@import 'essay.scss';
</style>