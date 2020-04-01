<template>
    <v-content>
        <v-row>
            <v-col class="essay" cols=12 sm=8>
                <essay-info/>
                <essay-text/>
            </v-col>
            <v-col class="aside" cols=12 sm=4>
                <side-info/>
                <sidebar/>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import { mapState } from 'vuex'
    import sidebar from '@/components/sidebar/sidebar.vue'
    import sideInfo from '@/components/sideInfo/sideInfo.vue'
    import essayInfo from './essayInfo/essayInfo.vue'
    import essayText from './essayText/essayText.vue'
    export default {
        name: "articleEssay",
        computed:{

        },
        components:{
            essayInfo,essayText,sideInfo,sidebar
        }
    }
</script>

<style scoped lang="scss">
@import 'articleEssay.scss';
</style>