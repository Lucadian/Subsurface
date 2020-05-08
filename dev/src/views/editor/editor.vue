<template>
    <v-content>
        <v-row>
            <v-col class="essay" cols=12 sm=8>
                <editor-info :value="info"/>
                <editor-text :value="text"/>
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
    import editorInfo from './editorInfo/editorInfo.vue'
    import editorText from './editorText/editorText.vue'
    import content from '../../../../content/article/editor'
    export default {
        name: "editor",
        data(){
            return {
                info:'',
                text:'',
            }
        },
        computed:{

        },
        components:{
            editorInfo,editorText,sideInfo,sidebar
        },
        created(){
            let arr = content.split('<!--divider-->')
            this.info = arr[0]
            this.text = arr[1].replace(/__imageHost/g,'./')
        },
        mounted(){
            console.log(this)
        }
    }
</script>

<style scoped lang="scss">
    @import 'editor.scss';
</style>