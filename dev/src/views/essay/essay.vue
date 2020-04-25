<template>
    <v-content>
        <v-row>
            <v-col class="essay" cols=12 sm=8>
                <essay-info :value="info" :dirname="dirname"/>
                <essay-text :value="text"/>
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
    import axios from 'axios'
    import { essayHost } from '@/assets/host'
    export default {
        name: "essay",
        data(){
            return {
                info:'',
                text:'',
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
            }
        },
        components:{
            essayInfo,essayText,sideInfo,sidebar
        },
        created(){
            axios.get('http://'+ window.location.host + '/content/article/' + this.category + this.subclass + '/' + decodeURI(this.filename) + '.html?_=' + Date.now())
                .then(response => {
                    let arr = response.data.split('<!--divider-->')
                    this.info = arr[0]
                    this.text = arr[1].replace(/__imageHost/g,essayHost)
                })
                .catch(err => {
                    // window.location = 'http://'+ window.location.host + '/essay_err?' + err
                    console.log(err)
                })
        }
    }
</script>

<style scoped lang="scss">
@import 'essay.scss';
</style>