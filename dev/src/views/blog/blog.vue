<template>
    <v-content>
        <v-row>
            <v-col class="blogs" cols=12 sm=8>
                <selector/>
                <blog-info/>
                <blog-tabs/>
                <blog-text :year="year"/>
            </v-col>
            <v-col class="aside" cols=12 sm=4>
                <side-info/>
                <sidebar/>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import blogInfo from './blogInfo/blogInfo'
    import blogTabs from './blogTabs/blogTabs'
    import blogText from './blogText/blogText'
    import selector from './selector/selector'
    import sidebar  from '@/components/sidebar/sidebar.vue'
    import sideInfo from '@/components/sideInfo/sideInfo.vue'

    export default {
        name: "blog",
        data(){
            return {

            }
        },
        components:{
            blogInfo,sideInfo,sidebar,blogText,blogTabs,selector
        },
        props:['year'],
    }
</script>

<style scoped lang="scss">
    main.v-content{
        &::before{
            display: block;content: '';
            position: fixed;top: 0;left: 0;
            width: 100vw;height: 100vh;
            background: linear-gradient(0deg,#d0d0d0 4%,#a8a8a8 30%,#6c6c6c 95%);
        }
        width: calc(67rem - 0.5px);
        margin: 64px auto 0 auto;
        padding-top: 0!important;
        @media(max-width: 960px){
            margin-top: 56px;
        }
        div.row{
            margin: 0;
            box-shadow: 0 1px 10px #646464;
            box-sizing: border-box;
            border-radius: 0 0 3px 3px;
            background-color: hsl(0,0%,95%);
            @media(max-width: 600px){
                background-color: white;
                border-radius: 0;
                box-shadow: none;
            }
            div.blogs{
                position: relative;
                padding: 0;
                @media(max-width: 600px){
                    border-right: 0;
                }

            }
            div.aside{
                padding: 0;
            }
        }

    }
</style>